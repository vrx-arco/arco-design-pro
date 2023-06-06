import { addComponent, addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit'
import * as obj from '@vrx-arco/pro-components'
import { transpileNoSSRFriendly } from './transpile'
import { vrxArcoUnplugin } from './vrxArcoUnplugin'
import type { VrxArcoOption } from './type'
export default defineNuxtModule<VrxArcoOption>({
  meta: {
    name: 'vrx-arco',
    configKey: 'vrxArco',
  },
  defaults: {
    sideEffect: true,
    importStyle: 'css',
    transpile: true,
  },
  setup(option, nuxt) {
    if (option.transpile) {
      transpileNoSSRFriendly(nuxt)
    }

    Object.keys(obj).forEach((key) => {
      if (/^[a-z]/.test(key)) {
        return
      }
      addComponent({
        name: key,
        filePath: '@vrx-arco/pro-components',
        export: key,
        global: false,
      })
    })

    if (option.sideEffect) {
      addVitePlugin(vrxArcoUnplugin.vite({ option: nuxt.options, vrxArco: option }))
      addWebpackPlugin(vrxArcoUnplugin.webpack({ option: nuxt.options, vrxArco: option }))
    }
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vrxArco?: VrxArcoOption
  }
  interface NuxtOptions {
    vrxArco?: VrxArcoOption
  }
}
