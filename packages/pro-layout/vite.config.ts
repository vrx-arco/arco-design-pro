import { defineConfig, mergeConfig } from 'vite'
import { resolve } from 'node:path'
import { prodConfig } from '../../build/vite.prod.config'

export default mergeConfig(
  prodConfig,
  defineConfig({
    build: {
      lib: {
        name: 'vrx-acro-layout',
        entry: resolve(__dirname, 'src/index.ts'),
      },
    },
  })
)
