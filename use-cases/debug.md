# Kimi K3 for Bug Hunting — AllRouter Use Case

Debugging is an exploratory task with high uncertainty. K3's cost lets you run more parallel hypotheses.

## The Strategy

**Parallel debugging**: Launch 3 K3 agents with different angles simultaneously. Each explores a different theory (memory race, type coercion, off-by-one). Their combined cost is still <1 Sonnet call.

```bash
# Terminal 1
claude --model=Kimi-K3 "Look for race conditions in the worker pool"

# Terminal 2  
claude --model=Kimi-K3 "Check type coercion in the API middleware layer"

# Terminal 3
claude --model=Kimi-K3 "Verify boundary conditions in the parser loop"
```

## The Numbers

- Sonnet single debug session: ~$0.25
- 3 parallel K3 sessions: ~$0.06 total
- Result: 3x more hypotheses explored, ~75% cost saving

## When K3 Fails at Debugging

K3 struggles with:
- Deep framework internals (React vDOM internals, V8 optimization quirks)
- Multi-layer stack issues spanning >3 abstraction boundaries
- Bugs that require reading >20 files to understand context

For these, use `claude-opus-5` via AllRouter.
