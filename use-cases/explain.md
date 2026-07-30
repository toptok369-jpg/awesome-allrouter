# Kimi K3 for Code Explanation — AllRouter Use Case

Use `gemma-4-31b-it` ($0.10/M input, own GPU) for pure explanation tasks. It's 15x cheaper than K3 and good enough.

## When to use K3 instead

- Code review of PRs where you need to *agree/disagree* with the author
- Architecture docs where the explanation itself becomes part of the codebase
- Onboarding docs for senior engineers who'll notice subtle errors

## Cost Comparison

For explaining a 10K-line codebase to a new hire:

| Model | Input Cost | Output Cost | Total |
|---|---|---|---|
| gemma-4-31b-it | $0.001 | $0.005 | **$0.006** |
| Kimi-K3 | $0.015 | $0.075 | **$0.09** |
| GLM5.2 | $0.007 | $0.022 | **$0.029** |
| Claude Sonnet | $0.30 | $1.50 | **$1.80** |

*For pure "what does this code do" — there's no reason to pay $1.80 when $0.006 gets you there.*
