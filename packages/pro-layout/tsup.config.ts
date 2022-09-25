import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    dts: { only: true },
    clean: false,
  },
  {
    entry: ['arco-style.ts'],
    clean: false,
    format: ['esm'],
    outDir: '.',
  },
  {
    entry: ['arco-style.cts'],
    clean: false,
    format: ['cjs'],
    outDir: '.',
  },
  {
    entry: ['arco-style-css.ts'],
    clean: false,
    format: ['esm'],
    outDir: '.',
  },
  {
    entry: ['arco-style-css.cts'],
    clean: false,
    format: ['cjs'],
    outDir: '.',
  },
])
