# Hermes Agent + AllRouter

## 接入方式 1: config.yaml 直接指定

编辑 `~/.hermes/config.yaml`:

```yaml
providers:
  allrouter:
    type: anthropic-compatible       # or openai-compatible
    base_url: https://allrouter.ai/v1
    api_key: sk-allrouter-xxx
    models:
      - Kimi-K3
      - claude-sonnet-4-6

default_model: Kimi-K3
default_provider: allrouter
```

重启 hermes 即可。

## 接入方式 2: 环境变量（推荐 CI/容器）

```bash
export HERMES_MODEL=Kimi-K3
export HERMES_BASE_URL=https://allrouter.ai/v1
export HERMES_API_KEY=sk-allrouter-xxx
hermes
```

## Cursor / VS Code 中 tested

Cost per long agentic loop (50 turns, ~200K tokens output): $1.50 with Kimi-K3 vs $18 with Claude Sonnet 4.6.

## 关键陷阱

- Kimi-K3 用 `wire_api=chat`, 不是 `responses` — Codex 桌面才需要 `responses`
- 长 system prompt 用 cache — Kimi K3 的 cache 命中率约 60-80% in agentic loops
- Hermes 不是 Anthropic 协议 → 用 `type: openai-compatible` 更稳
