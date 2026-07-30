# Goose (Block, Inc.) + AllRouter

## 配置

`~/.config/goose/profiles.yaml`:

```yaml
profiles:
  default:
    provider: openai
    model: Kimi-K3
    openai_host: https://allrouter.ai/v1
    openai_api_key: sk-allrouter-xxx
```

或 Claude 模型:

```yaml
  quality:
    provider: anthropic
    model: claude-sonnet-4-6
    anthropic_host: https://allrouter.ai/v1
    anthropic_api_key: sk-allrouter-xxx
```

## 切换

```bash
goose session start --profile default  # Kimi K3 (cheap)
goose session start --profile quality  # Sonnet (expensive)
```
