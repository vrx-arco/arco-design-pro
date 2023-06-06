import { defineNuxtConfig } from 'nuxt/config'
import VrxArco from '../../packages/nuxt/src/index'
export default defineNuxtConfig({
  modules: [VrxArco],
  devtools: {
    enabled: true,
  },
})
