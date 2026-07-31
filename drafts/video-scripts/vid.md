# K3 Demo Script #18

0-5s: prompt -> "Refactor src/auth.py to async/await. Update callers. Run tests."
5-15s: Claude Code (Kimi-K3) 流式输出 diff
15-25s: pytest 全通过
25-30s: cost 显示 $0.04 (vs Sonnet $2.10)

配文: 一下午 23 文件, Sonnet $2.10, K3 $0.04. Pass rate 66% vs 68%.
