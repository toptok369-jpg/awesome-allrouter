# Kimi K3 for Code Refactoring — AllRouter Use Case

Refactoring is the highest-volume agentic task. It's where Kimi K3's cost advantage is most decisive.

## The Math

A typical "rename class + update all imports + verify tests" refactor:
- 12 files modified
- 28 turns of agent loop
- ~180K input tokens, ~50K output tokens

**Kimi K3**: (0.18 × $1.50) + (0.05 × $7.50) = **$0.045**
**Claude Sonnet 4.6**: (0.18 × $3.00) + (0.05 × $15.00) = **$1.29**

**28x cost difference.** Sonnet's pass rate is ~6pp higher on SWE-bench, but refactors are usually correct-by-construction tasks — the extra precision is wasted.

## The Setup (Claude Code)

```bash
export ANTHROPIC_BASE_URL=https://allrouter.ai/v1
export ANTHROPIC_AUTH_TOKEN=$ALLROUTER_KEY
export ANTHROPIC_MODEL=Kimi-K3
claude "Rename the User model to Account across the entire codebase, update all imports, run tests"
```

## When to upgrade to Sonnet

- Refactors that change public API signatures (higher precision needed)
- Refactors that affect 10+ downstream consumers
- Legacy codebases with <50% test coverage

## Cache hit note

For repeated refactors in the same repo, Kimi K3's cache_hit_price drops input cost by 10x. A 5-refactor session costs about $0.18 total in K3 vs $6.45 in Sonnet.
