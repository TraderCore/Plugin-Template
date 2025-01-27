# TraderCore Plugin Template 🚀

A modern, TypeScript-based plugin template for TraderCore, using PNPM workspace for package management. This template provides a structured foundation for building plugins with shared types and main implementation code.

## 📦 Packages

This monorepo contains two packages:

- `@tradercore/plugin-template-main`: Core implementation package
- `@tradercore/plugin-template-types`: Shared TypeScript types and interfaces

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- PNPM (v8 or higher)

## 🚀 Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Build all packages:
```bash
pnpm build
```

3. Start development mode:
```bash
pnpm dev
```

## 📁 Project Structure

```
.
├── packages/
│   ├── main/               # Main implementation package
│   │   ├── src/           # Source code
│   │   └── dist/          # Compiled output
│   └── types/             # Types package
│       ├── src/           # Type definitions
│       └── dist/          # Compiled types
├── package.json           # Root package configuration
└── pnpm-workspace.yaml    # Workspace configuration
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Watch mode for development |
| `pnpm clean` | Clean build artifacts |
| `pnpm test` | Run tests |

## 📦 Publishing

The packages are configured for public publishing to npm with the `@tradercore` scope.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
