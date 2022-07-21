import { defineConfig, mergeConfig } from 'vite'
import { resolve } from 'node:path'
import { baseConfig } from '../../build/vite.base.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        name: 'vrx-acro-components',
        entry: resolve(__dirname, 'src/index.ts'),
      },
    },
  })
)
