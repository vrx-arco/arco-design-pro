import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VrxArcoProComponentsResolver } from '@vrx-arco/pro-components/resolver'
import { VrxArcoProLayoutResolver } from '@vrx-arco/pro-layout/resolver'
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
      resolvers: [ArcoResolver({}), VrxArcoProLayoutResolver({}), VrxArcoProComponentsResolver({})],
    }),
  ],
})
