# TraderCore Plugin Template

This is a PNPM monorepo containing two packages:
- `@trader-core/main`: Main executable code
- `@trader-core/types`: Shared types and interfaces

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Build all packages:
```bash
pnpm build
```

3. Development:
```bash
pnpm dev
```

## Package Structure

```
packages/
  ├── main/        # Main executable code
  │   ├── src/
  │   └── dist/
  └── types/       # Shared types and interfaces
      ├── src/
      └── dist/
```

## Scripts

- `pnpm build`: Build all packages
- `pnpm dev`: Watch mode for development
- `pnpm clean`: Clean build artifacts
- `pnpm test`: Run tests
