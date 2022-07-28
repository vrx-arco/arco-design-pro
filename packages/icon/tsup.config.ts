import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['cjs/index.ts'],
    clean: false,
    format: ['cjs'],
    outDir: '.',
  },
  {
    entry: ['mjs/index.ts'],
    clean: false,
    dts: true,
    format: ['esm'],
    outDir: '.',
  },
])
