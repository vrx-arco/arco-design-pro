import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'

const FormatExt = {
  es: '.mjs',
  cjs: '.js',
}

export const baseConfig = defineConfig({
  server: {
    host: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'name',
      formats: ['cjs', 'es'],
      fileName: (m) => `index${FormatExt[m]}`,
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-types',
        'vue-router',
        '@arco-design/web-vue',
        '@vueuse/core',
        RegExp(String.raw`@arco-design/web-vue/es/.*`),
        RegExp(String.raw`@arco-design/web-vue/lib/.*`),
        RegExp(String.raw`@vrx-arco/.*`),
      ],
    },
    minify: false,
    target: 'es2015',
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@vrx-arco/pro-layout': resolve(__dirname, '../packages/pro-layout/src'),
      '@vrx-arco/pro-components': resolve(__dirname, '../packages/pro-components/src'),
      '@vrx-arco/app': resolve(__dirname, '../packages/app/src'),
    },
  },
})
