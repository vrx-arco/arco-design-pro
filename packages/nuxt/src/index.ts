import { defineNuxtModule } from '@nuxt/kit'
import { transpileNoSSRFriendly } from './transpile'
import type { VrxArcoOption } from './type'
import { vrxArcoComponents, vrxArcoUnplugin } from './vrx-arco'
import { arcoComponents, arcoIconComponents, arcoUnplugin } from './arco'

export default defineNuxtModule<VrxArcoOption>({
  meta: {
    name: 'vrx-arco',
    configKey: 'vrxArco',
  },
  defaults: {
    sideEffect: true,
    importStyle: 'css',
    transpile: true,
    resolveIcons: false,
  },
  setup(option, nuxt) {
    if (option.transpile) {
      transpileNoSSRFriendly(nuxt)
    }

    vrxArcoComponents()
    option.arco && arcoComponents()
    option.resolveIcons && arcoIconComponents()

    if (option.sideEffect) {
      vrxArcoUnplugin(nuxt.options, option)
      option.arco && arcoUnplugin(nuxt.options, option)
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
