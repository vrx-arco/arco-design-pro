import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
export const baseConfig = defineConfig({
  server: {
    host: true,
  },
  plugins: [vue(), vueJsx()],
})
