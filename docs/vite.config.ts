import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['@arco-design/web-vue', '@vrx-arco/icon', '@vrx-arco/pro-components'],
  },
  optimizeDeps: {
    exclude: ['vitepress'],
  },
})
