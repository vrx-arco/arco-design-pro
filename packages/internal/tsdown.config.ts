import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  dts: true,
  treeshake: true,
  platform: 'node',
  format: ['esm'],
  publint: true,
  unused: true,
  external: ['@vrx/cp', 'void-fs'],
})
