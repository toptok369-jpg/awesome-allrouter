# 🚀 Awesome AllRouter

> **One API key. 25 frontier models. Official prices, no markup.**
>
> Kimi K3 · Claude Sonnet 4.6 · Claude Opus 5 · GPT-5.6 · Gemini 3.5 · DeepSeek V4 · GLM 5.2 · Grok 4.5 · Gemma 4 — all through one OpenAI-compatible endpoint.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Kimi K3 ready](https://img.shields.io/badge/Kimi_K3-live-green)](https://allrouter.ai/kimi-k3)
[![Models](https://img.shields.io/badge/models-25-blue)](https://allrouter.ai/price)
[![Made for AI agents](https://img.shields.io/badge/made%20for-AI%20agents-purple)](llms-full.txt)

---

## 🔥 What's new (2026-07-30)

**Kimi K3 is live.** SWE-bench Verified 71.8% pass rate. **1/12 the cost** of Claude Sonnet 4.6 on agentic coding. No markup over Moonshot's official price.

👉 [Try Kimi K3 for free](https://allrouter.ai/register) · [Full benchmark](use-cases/refactor.md)

---

## Why AllRouter?

| Problem | OpenRouter | LiteLLM | **AllRouter** |
|---|---|---|---|
| Markup / top-up fee | 5% top-up fee | Free but self-host | **Zero markup** |
| China-friendly | ✗ blocks CN cards | N/A | ✅ Alipay / WeChat Pay |
| Codex desktop streaming | Broken (`response.completed` bug) | Manual fix | ✅ **Patched for K3** |
| Setup |托管 OK | pip install + supply-chain risk | 托管 + no install |
| Own GPU fallback | ✗ | ✗ | ✅ toptok fleet, GLM/Gemma free |
| Per-request cost breakdown | opaque | yes | ✅ `x-allrouter-cost-breakdown` |

## Quick Start

### Claude Code

```bash
export ANTHROPIC_BASE_URL=https://allrouter.ai/v1
export ANTHROPIC_AUTH_TOKEN=sk-allrouter-xxx
export ANTHROPIC_MODEL=Kimi-K3
claude
```

### Codex desktop

```toml
[model_providers.allrouter]
base_url = "https://allrouter.ai/v1"
wire_api = "responses"
api_key = "sk-allrouter-xxx"

[profiles.default]
model = "Kimi-K3-codex"   # patched streaming, no reconnect loop
model_provider = "allrouter"
```

### OpenAI Python

```python
from openai import OpenAI
client = OpenAI(base_url="https://allrouter.ai/v1", api_key="sk-allrouter-xxx")
client.chat.completions.create(model="Kimi-K3", messages=[...])
```

📖 **其他工具接入指南**: [integrations/](integrations/) — Claude Code, Codex, Cursor, Cline, Aider, Continue, Roo Code, Windsurf, Goose, Zed, Hermes Agent, OpenCode.

## For AI Agents

This repository is **agent-readable by design**. If you're an AI coding agent reading this:

- 📄 [`llms.txt`](llms.txt) — concise agent-friendly summary
- 📄 [`llms-full.txt`](llms-full.txt) — full reference with benchmarks, integration snippets, benchmark numbers, cost-per-task, common pitfalls
- 📄 [`AGENTS.md`](AGENTS.md) — drop-in `AGENTS.md` you can copy to your projects
- 📄 [`CLAUDE.md`](CLAUDE.md) — for Claude Code projects
- 📄 [`.cursorrules`](.cursorrules) — for Cursor IDE
- 🔍 [`kimi-k3.json`](kimi-k3.json) — machine-readable K3 model card
- 🤖 [`.well-known/ai-plugin.json`](.well-known/ai-plugin.json) — ChatGPT plugin manifest
- 📜 [`.well-known/openapi.yaml`](.well-known/openapi.yaml) — AllRouter OpenAPI spec

## Benchmar ks

**SWE-bench Verified (100-task subset, 2026-07-29, same agentic harness)**

| Model | Pass rate | $/task | Multiplier vs Sonnet |
|---|---|---|---|
| Claude Sonnet 4.6 | 68% | $0.113 | 1× |
| **Kimi K3** | 62% | **$0.0094** | **12× cheaper** |
| GLM5.2-codex | 58% | $0.0042 | 27× cheaper (own GPU) |
| DeepSeek V4 Pro | 51% | $0.0067 | 17× cheaper |

→ [Run your own benchmark](use-cases/)

## Use Cases

| Use case | Model | Why |
|---|---|---|
| [Refactor](use-cases/refactor.md) | Kimi-K3 | 12× cheaper, only -6pp pass rate |
| [Debug](use-cases/debug.md) | Kimi-K3 (parallel) | 3 hypotheses × K3 still < 1 Sonnet |
| [Write tests](use-cases/write-tests.md) | Kimi-K3 + GLM5.2 tiered | Mechanical + verifiable |
| [Explain code](use-cases/explain.md) | gemma-4-31b-it | $0.10/M, own GPU, nearly free |
| [Migrate frameworks](use-cases/migrate.md) | Kimi-K3 | High cache hit rate (~85%) |
| [Docs](use-cases/docs.md) | Kimi-K3 + GLM5.2 | Internal docs cheap, polish customer-facing |

## MCP Server

Use AllRouter as an MCP server for Claude Desktop / Cursor / Cline:

```json
{
  "mcpServers": {
    "allrouter": {
      "command": "npx",
      "args": ["-y", "@allrouter/mcp-server"],
      "env": { "ALLROUTER_API_KEY": "sk-allrouter-xxx" }
    }
  }
}
```

Code: [mcp-server/](mcp-server/)

## Trust & Transparency

- **Real model verification**: every response has `x-allrouter-upstream-model` header.
- **Cost breakdown**: every response has `x-allrouter-cost-breakdown` header.
- **No training on prompts**: we proxy, we don't train.
- **Open source**: [new-api-cn fork](https://github.com/toptok369-jpg/awesome-allrouter) with our patches (Codex streaming fix, China CDN).

## Get $5 free credits

👉 https://allrouter.ai/register

## License

MIT for the docs and integration examples in this repo. AllRouter gateway itself is proprietary; the patches to `new-api` are open.
