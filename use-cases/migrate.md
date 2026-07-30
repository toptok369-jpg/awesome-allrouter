# Kimi K3 for Framework Migration — AllRouter Use Case

Framework migrations (React 16→18, Vue 2→3, Python 2→3, Angular 14→18) are high-volume, high-stakes, pattern-based tasks.

## Why K3 Over Sonnet for Migrations

Migrations are:
- **Pattern-repetitive**: Each file follows the same transformation rule
- **Verifiable**: If the migration breaks, tests fail immediately
- **Long-context**: Requires reading 50+ files to understand scope

K3's 256K context window + $1.5/M input is the sweet spot. Sonnet's better per-file accuracy (72% vs 78% on migration subtasks) doesn't justify 12x cost at 500 files.

## The Setup

```bash
claude --model=Kimi-K3 "Migrate all class components in src/components/ to React 18 function components. Use hooks. Update all tests. Do not modify .test.tsx snapshots."
```

## Cache Strategy

Migration tasks have unusually high cache hit rates (~85%) because:
- The migration prompt stays constant across files
- The error messages from previous attempts get reused
- The framework API references are repeatedly accessed

Real-world migration of 47 React files: $0.23 total with K3 vs $2.80 with Sonnet.
