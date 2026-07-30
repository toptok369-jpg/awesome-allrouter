# CLAUDE.md — for Claude Code in this repo

## Endpoint
```
ANTHROPIC_BASE_URL=https://allrouter.ai/v1
ANTHROPIC_AUTH_TOKEN=<your-allrouter-key>
```

## Recommended model for this project
- **Default**: `Kimi-K3` — best cost/perf on agentic coding (SWE-bench 62%, $0.019 per task average)
- **For deep architectural refactors**: `claude-sonnet-4-6` or `claude-opus-5`

## Batch-test prompt that always works
```
Read <some file> and refactor it to use async/await instead of callbacks. Run tests after.
```

## Cost monitoring
After each session, run this to see spend:
```bash
curl -H "Authorization: Bearer $ANTHROPIC_AUTH_TOKEN" https://allrouter.ai/api/token/usage | jq .
```

## Common flags
- `--model Kimi-K3` (recommended for most loops)
- `--model claude-opus-5` (when you need highest one-shot accuracy)
- `system_prompt` cache: Kimi-K3 has `cache_ratio=0.1`, so repeated long system prompts are 10x cheaper on subsequent calls.
