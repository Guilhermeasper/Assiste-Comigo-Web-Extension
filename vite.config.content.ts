import path from "node:path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  plugins: [viteSingleFile()],
  build: {
    minify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    target: "es2017",
    modules: true,
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    rollupOptions: {
      input: path.resolve("src/plugin/content/content.ts"),
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@background": path.resolve("src/plugin/background"),
      "@content": path.resolve("src/plugin/content"),
      "@shared": path.resolve("src/shared"),
      "@ui": path.resolve("src/ui"),
    },
  },
}));
