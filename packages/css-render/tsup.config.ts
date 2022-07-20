import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  target: 'es2015',
  clean: true,
  format: ['cjs', 'esm'],
})
