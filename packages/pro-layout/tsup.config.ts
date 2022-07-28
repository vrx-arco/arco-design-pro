import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    dts: { only: true },
    clean: false,
  },
  {
    entry: ['src/arco-style.ts'],
    clean: false,
    format: ['esm'],
    outDir: '.',
  },
  {
    entry: ['src/arco-style.cts'],
    clean: false,
    format: ['cjs'],
    outDir: '.',
  },
  {
    entry: ['src/arco-style-css.ts'],
    clean: false,
    format: ['esm'],
    outDir: '.',
  },
  {
    entry: ['src/arco-style-css.cts'],
    clean: false,
    format: ['cjs'],
    outDir: '.',
  },
])
