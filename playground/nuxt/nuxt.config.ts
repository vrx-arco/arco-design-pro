import { defineNuxtConfig } from 'nuxt/config'
import { createRequire } from 'module'
import { dirname } from 'path'
const require = createRequire(import.meta.url)
export default defineNuxtConfig({
  alias: {
    dayjs: dirname(require.resolve('dayjs/esm')),
  },
  build: {
    transpile: ['@vrx-arco/icon', '@arco-design/web-vue', '@arco-design/web-vue/es/icon'],
  },
  devtools: {
    enabled: true,
  },
})
