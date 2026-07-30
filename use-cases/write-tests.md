# Kimi K3 for Test Writing — AllRouter Use Case

Test writing is K3's sweet spot. It's mechanical, well-scoped, and tests are disposable (if they're wrong, you find out immediately).

## Why K3 Wins Here

- Tests are naturally cached: test boilerplate/setup is ~70% of input tokens
- K3 cache price is $0.15/M — nearly free
- Test quality has a lower bar than production code
- Bad tests fail loudly; they don't silently corrupt prod

## The Setup

```bash
export ANTHROPIC_BASE_URL=https://allrouter.ai/v1
export ANTHROPIC_AUTH_TOKEN=$ALLROUTER_KEY
export ANTHROPIC_MODEL=Kimi-K3
claude "Write comprehensive pytest tests for src/api.py. Mock external deps. Aim for 95% coverage."
```

## Coverage Strategy

1. **K3** writes the first 80% (happy paths, basic edge cases)
2. **GLM5.2** (own GPU, near-free) reviews for obvious holes
3. **Sonnet 4.6** (only if needed) adds adversarial edge cases

This three-tier approach typically costs $0.03-0.08 per file vs $0.40-0.80 with Sonnet alone.
