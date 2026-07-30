# Kimi K3 for Documentation — AllRouter Use Case

Technical docs are a quality/latency tradeoff. K3 is the right default; Sonnet only for customer-facing docs.

## The Tiered Approach

| Doc Type | Model | Why |
|---|---|---|
| Internal READMEs | `gemma-4-31b-it` | Near-free, disposable |
| API reference | `GLM5.2` | Structured output, good at tables |
| Architecture decision records | `Kimi-K3` | Needs reasoning about tradeoffs |
| Customer-facing guides | `claude-sonnet-4-6` | Tone and polish matter |
| Migration guides | `Kimi-K3` | Pair well with actual code |

## The Workflow

```bash
# Step 1: K3 reads the code and drafts
claude --model=Kimi-K3 "Read src/payment.py and write an ADR for the payment retry logic"

# Step 2: GLM5.2 formats and validates
claude --model=GLM5.2 "Convert this ADR to markdown with proper code blocks: <k3_output>"

# Step 3: Sonnet only for customer-facing polish
claude --model=claude-sonnet-4-6 "Rewrite this internal ADR for external developers, add examples and a quick-start"
```

Total cost for a 3-page ADR: ~$0.07 with K3+GLM vs ~$0.90 with Sonnet alone.
