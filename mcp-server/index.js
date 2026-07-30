#!/usr/bin/env node
// @allrouter/mcp-server — MCP entry point
// Lets any MCP client (Claude Desktop, Cursor, Cline, Zed, Continue) talk to AllRouter

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_KEY = process.env.ALLROUTER_API_KEY;
const BASE_URL = process.env.ALLROUTER_BASE_URL || "https://allrouter.ai";

if (!API_KEY) {
  console.error("ALLROUTER_API_KEY env var required. Get one at https://allrouter.ai/register");
  process.exit(1);
}

const TOOLS = [
  {
    name: "allrouter_chat",
    description: "Call any of 25 LLMs (Kimi K3, Claude, GPT-5, Gemini, DeepSeek, GLM, Grok, Gemma) through AllRouter",
    inputSchema: {
      type: "object",
      required: ["model", "messages"],
      properties: {
        model: { type: "string", description: "e.g. Kimi-K3, claude-sonnet-4-6, gpt-5.5-openai-compact" },
        messages: {
          type: "array",
          items: {
            type: "object",
            properties: { role: { type: "string" }, content: { type: "string" } },
            required: ["role", "content"]
          }
        },
        max_tokens: { type: "number", default: 2048 }
      }
    }
  },
  {
    name: "allrouter_list_models",
    description: "Get live pricing and supported_endpoint_types for all 25 models",
    inputSchema: { type: "object", properties: {} }
  },
  {
    name: "allrouter_pick_model",
    description: "Pick the cheapest model meeting a quality bar for a task type (chat/code/vision/reasoning/agentic)",
    inputSchema: {
      type: "object",
      required: ["task_type"],
      properties: {
        task_type: { type: "string", enum: ["chat", "code", "vision", "reasoning", "agentic"] },
        max_cost_per_m_input: { type: "number", description: "USD per M input tokens, e.g. 1.5" }
      }
    }
  }
];

async function allrouterFetch(path, opts = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
      ...(opts.headers || {})
    }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AllRouter ${path} → ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

const TASK_MODEL_MAP = {
  code:     ["Kimi-K3", "claude-sonnet-4-6", "GLM5.2-codex"],
  agentic:  ["Kimi-K3-codex", "claude-opus-5", "GLM5.2"],
  chat:     ["gemini-3.5-flash", "GLM5.2", "Kimi-K3"],
  reasoning:["deepseek-reasoner", "claude-opus-5", "Kimi-K3"],
  vision:   ["gemini-3.5-flash", "claude-sonnet-4-6"]
};

const server = new Server(
  { name: "allrouter", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params;

  if (name === "allrouter_chat") {
    const result = await allrouterFetch("/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: args.model,
        messages: args.messages,
        max_tokens: args.max_tokens || 2048
      })
    });
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  }

  if (name === "allrouter_list_models") {
    const result = await allrouterFetch("/api/pricing");
    const summary = result.data.map(m => ({
      model: m.model_name,
      input_per_m: m.model_ratio,
      output_per_m: m.model_ratio * (m.completion_ratio || 1),
      cache_per_m: m.model_ratio * (m.cache_ratio || 1),
      protocols: m.supported_endpoint_types
    }));
    return { content: [{ type: "text", text: JSON.stringify(summary, null, 2) }] };
  }

  if (name === "allrouter_pick_model") {
    const result = await allrouterFetch("/api/pricing");
    const candidates = TASK_MODEL_MAP[args.task_type] || TASK_MODEL_MAP.chat;
    const pick = candidates
      .map(name => result.data.find(m => m.model_name === name))
      .filter(Boolean)
      .filter(m => !args.max_cost_per_m_input || m.model_ratio <= args.max_cost_per_m_input)[0];
    if (!pick) return { content: [{ type: "text", text: "No model fits within budget" }] };
    return { content: [{ type: "text", text: JSON.stringify({ recommended: pick.model_name, cost_per_m_input: pick.model_ratio, why: `Best ${args.task_type} model in AllRouter within budget` }, null, 2) }] };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
