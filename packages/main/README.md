# @tradercore/plugin-template-main

Core implementation package for the TraderCore plugin template. This package contains the main executable code and business logic for your plugin.

## Installation

```bash
pnpm add @tradercore/plugin-template-main
```

## Usage

```typescript
import { /* your exports */ } from '@tradercore/plugin-template-main';

// Your implementation here
```

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start development mode:
```bash
pnpm dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build the package using tsup |
| `pnpm dev` | Watch mode for development |
| `pnpm clean` | Clean build artifacts |
| `pnpm test` | Run tests |

## Dependencies

- `@tradercore/plugin-template-types`: Shared type definitions
- TypeScript
- tsup (for building)
- rimraf (for cleaning) 