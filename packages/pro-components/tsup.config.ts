import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['resolver.ts'],
    clean: false,
    format: ['esm', 'cjs'],
    dts: true,
    outDir: '.',
  },
])
