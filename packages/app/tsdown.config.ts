import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  dts: true,
  target: 'es2015',
  treeshake: true,
  format: ['esm'],
  publint: true,
  unused: true,
})
