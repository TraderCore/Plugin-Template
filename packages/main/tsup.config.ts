import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	dts: true,
	splitting: false,
	clean: true,
	minify: true,
	treeshake: true,
	sourcemap: true,
});
