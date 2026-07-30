# Roo Code (VS Code extension) + AllRouter

## 配置

Roo Code Settings → API Provider → "OpenAI Compatible":
- Base URL: `https://allrouter.ai/v1`
- API Key: `<your-allrouter-key>`
- Model: `Kimi-K3`

## 项目级 .roomodes

放 `.roomodes` 在 repo root 让 Roo 默认走 AllRouter:

```yaml
customModes:
  - slug: cheap-coding
    name: "💰 Cheap Coding (K3)"
    roleDefinition: You are an expert coder using Kimi K3 via AllRouter.
    groups:
      - read
      - edit
      - command
    source: project
  - slug: max-quality
    name: "🔥 Max Quality (Sonnet 4.6)"
    roleDefinition: You are an expert coder using Claude Sonnet 4.6 via AllRouter.
    groups:
      - read
      - edit
      - command
    source: project
```

## 实测成本

一下午重构 (4h, 30+ file edits): $0.73 with Kimi-K3。同样工作量 Sonnet 要 $8.50。

## 提示

- 用 `Kimi-K3` 做 90% 任务，Sonnet 4.6 留给"这次必须对" 
- 开 Roo 的 `autoApprove` + `enableCheckpoints` 让 K3 跑得更 autonomous
