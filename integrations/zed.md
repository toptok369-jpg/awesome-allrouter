# Zed Editor + AllRouter

## settings.json

```json
{
  "language_models": {
    "openai_compatible": {
      "allrouter": {
        "api_url": "https://allrouter.ai/v1",
        "available_models": [
          {
            "name": "Kimi-K3",
            "display_name": "Kimi K3 (cheap agentic)",
            "max_tokens": 256000
          },
          {
            "name": "claude-sonnet-4-6",
            "display_name": "Sonnet 4.6 (quality)",
            "max_tokens": 200000
          }
        ]
      }
    }
  },
  "assistant": {
    "default_model": {
      "provider": "openai_compatible",
      "model": "Kimi-K3"
    }
  }
}
```

## 提示

Zed 的 inline assistant 用 K3 一次几百 token 任务几乎免费，panel assistant 长任务也方便切到 Sonnet。
