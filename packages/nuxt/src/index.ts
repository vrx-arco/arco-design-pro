import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import { transpileNoSSRFriendly } from './transpile'
import type { VrxArcoOption } from './type'
import {
  vrxArcoColorPickerComponents,
  vrxArcoColorPickerUnplugin,
  vrxArcoComponents,
  vrxArcoUnplugin,
} from './vrx-arco'
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
    arco: false,
    resolveIcons: false,
    colorPicker: false,
  },
  setup(option, nuxt) {
    extendViteConfig((config) => {
      config.optimizeDeps ||= {}
      config.optimizeDeps.exclude ||= []
      config.optimizeDeps.exclude.push('@vrx/core', '@vill-v/type-as', 'klona', '@vueuse/core')
    })
    if (option.transpile) {
      transpileNoSSRFriendly(nuxt)
    }

    vrxArcoComponents()
    option.arco && arcoComponents()
    option.resolveIcons && arcoIconComponents()
    option.colorPicker && vrxArcoColorPickerComponents()

    if (option.sideEffect) {
      vrxArcoUnplugin(nuxt.options, option)
      option.arco && arcoUnplugin(nuxt.options, option)
      option.colorPicker && vrxArcoColorPickerUnplugin(nuxt.options, option)
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
