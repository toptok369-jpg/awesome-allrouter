# Windsurf (Codeium) + AllRouter

## 配置

Windsurf Settings → Cascade → Custom Models:

```json
{
  "models": [
    {
      "name": "Kimi K3 (AllRouter)",
      "provider": "openai",
      "apiBase": "https://allrouter.ai/v1",
      "apiKey": "sk-allrouter-xxx",
      "model": "Kimi-K3"
    },
    {
      "name": "Claude Sonnet 4.6 (AllRouter)",
      "provider": "openai",
      "apiBase": "https://allrouter.ai/v1",
      "apiKey": "sk-allrouter-xxx",
      "model": "claude-sonnet-4-6"
    }
  ]
}
```

## 提示

- Windsurf Cascade 强依赖 system prompt 一致性 → Kimi-K3 的 cache 命中率会很高，单次会话后期成本接近 $0
- Windsurf 的 `@codebase` RAG + K3 长上下文 (256K) 是当前性价比天花板的组合
