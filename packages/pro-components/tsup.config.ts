import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  dts: { only: true, compilerOptions: { baseUrl: '.' } },
  clean: false,
})
