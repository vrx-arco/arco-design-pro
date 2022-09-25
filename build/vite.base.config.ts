import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
export const baseConfig = defineConfig({
  server: {
    host: true,
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@vrx-arco/pro-components/arco-style': resolve(
        __dirname,
        '../packages/pro-components/arco-style.mjs'
      ),
      '@vrx-arco/pro-layout/arco-style': resolve(
        __dirname,
        '../packages/pro-layout/arco-style.mjs'
      ),
      '@vrx-arco/pro-layout': resolve(__dirname, '../packages/pro-layout/src'),
      '@vrx-arco/pro-components': resolve(__dirname, '../packages/pro-components/src'),
      '@vrx-arco/app': resolve(__dirname, '../packages/app/src'),
    },
  },
})
