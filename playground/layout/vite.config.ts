import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VrxArcoProComponentsResolver, VrxArcoProLayoutResolver } from '@vrx-arco/helper'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        ArcoResolver({}),
        VrxArcoProLayoutResolver({}),
        VrxArcoProComponentsResolver({ colorPicker: true }),
      ],
    }),
  ],
  resolve: {
    alias: {
      dayjs: join(dirname(fileURLToPath(import.meta.resolve('dayjs'))), 'esm'),
    },
  },
  optimizeDeps: {
    exclude: ['pinia', 'vue', 'vue-router', 'klona', '@arco-design/web-vue'],
  },
})
