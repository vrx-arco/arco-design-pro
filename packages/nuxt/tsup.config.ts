import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { compilerOptions: { baseUrl: '.' } },
  target: 'node16',
  clean: true,
  splitting: true,
  treeshake: true,
  format: ['cjs', 'esm'],
})
