import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@vrx-arco/nuxt'],
  vrxArco: {
    arco: true,
    resolveIcons: true,
  },
  devtools: {},
})
