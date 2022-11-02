import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src'],
    dts: { only: true, compilerOptions: { baseUrl: '.' } },
    clean: false,
  },
  {
    entry: ['resolver.ts'],
    clean: false,
    format: ['esm'],
    dts: true,
    outDir: '.',
  },
])
