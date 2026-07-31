# ProductHunt 视频脚本 (90s)

## Scene 1: Hook (0-8s)
- 屏幕分屏： 左 Claude Code 跑 Sonnet 4.6 ($0.113/task), 右 Claude Code 跑 Kimi K3 ($0.0094/task)
- 同一个 prompt: "Refactor src/auth.py to async/await"
- Voice over: "Same task, 1/12 the cost"

## Scene 2: Problem (8-20s)
- 屏幕： OpenRouter / Requesty 价格页 → 都加 5%
- 屏幕： LiteLLM PyPI 投毒事件 HN 头条截图
- Voice over: "Two ways to use K3 today: pay 5% markup on OpenRouter, or run LiteLLM yourself and risk that. Neither makes sense."

## Scene 3: Solution (20-40s)
- 屏幕： AllRouter landing, $1.50 / $7.50 clearly displayed
- 屏幕： 25 model grid populating
- 屏幕： Enter Alipay/WeChat top-up flow
- Voice over: "One key. 25 models. Official prices. Alipay/WeChat Pay supported."

## Scene 4: Codex Fix (40-60s)
- 屏幕： Codex desktop with Kimi-K3-codex streaming without reconnects (split screen with K3 normal that fails)
- 屏幕： ~/.codex/config.toml showing `wire_api = "responses"`
- 屏幕： streaming log output
- Voice over: "We patched the Kimi K3 streaming event that was breaking Codex desktop. Now it just works."

## Scene 5: Benchmark (60-75s)
- 屏幕： SWE-bench 100-task table showing cost + pass rate for 4 models
- Voice over: "100 task benchmark: K3 is 12x cheaper than Sonnet with only 6pp lower pass rate. That's the trade I want."

## Scene 6: CTA (75-90s)
- 屏幕： https://allrouter.ai/register
- 屏幕： $5 free credit badge
- 屏幕： "no card needed"
- Voice over: "Get $5. No card. Alipay or WeChat. Right now."

B-roll assets needed:
- AllRouter landing page screen recording
- Cost comparison spreadsheet
- Codex config.toml screen
- Streaming log screencap
