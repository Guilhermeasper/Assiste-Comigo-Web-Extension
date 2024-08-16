import path from 'node:path';
import { defineConfig } from 'vite';
import generateFile from 'vite-plugin-generate-file';
import { viteSingleFile } from 'vite-plugin-singlefile';
import chromeManifest from './manifest';

export default defineConfig(({ mode }) => ({
  plugins: [
    viteSingleFile(),
    generateFile({
      type: 'json',
      output: './manifest.json',
      data: chromeManifest,
    }),
  ],
  build: {
    minify: mode === 'production',
    sourcemap: mode !== 'production' ? 'inline' : false,
    target: 'es2017',
    modules: true,
    emptyOutDir: false,
    outDir: path.resolve('dist'),
    rollupOptions: {
      input: path.resolve('src/background/background.ts'),
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@background': path.resolve('src/background'),
      '@shared': path.resolve('src/shared'),
    },
  },
}));
