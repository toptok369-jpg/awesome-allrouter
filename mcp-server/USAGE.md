# Using AllRouter MCP server without npm

If you don't have npm access, you can use the MCP server directly from GitHub.

## 1-line with npx + GitHub raw

Add to your `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "allrouter": {
      "command": "npx",
      "args": [
        "-y",
        "github:toptok369-jpg/awesome-allrouter",
        "mcp-server"
      ],
      "env": {
        "ALLROUTER_API_KEY": "sk-allrouter-xxx",
        "ALLROUTER_BASE_URL": "https://allrouter.ai"
      }
    }
  }
}
```

## Or via local clone

```bash
git clone https://github.com/toptok369-jpg/awesome-allrouter
cd awesome-allrouter/mcp-server
npm install
```

Then point Claude Desktop to that directory:

```json
{
  "mcpServers": {
    "allrouter": {
      "command": "node",
      "args": ["/Users/<you>/awesome-allrouter/mcp-server/index.js"],
      "env": {
        "ALLROUTER_API_KEY": "sk-allrouter-xxx"
      }
    }
  }
}
```

## Once published to npm

After we publish `@allrouter/mcp-server` to npm, you'd just do:

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

Currently waiting on npm account approval.
