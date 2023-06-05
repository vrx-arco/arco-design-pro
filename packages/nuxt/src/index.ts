import { addComponent, addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import * as obj from '@vrx-arco/pro-components'
import { vrxArcoUnplugin } from './vrxArcoUnplugin'
export default defineNuxtModule({
  meta: {
    name: 'vrx-arco',
  },
  setup(_, nuxt) {
    addVitePlugin(vrxArcoUnplugin.vite({ option: nuxt.options }))

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
  },
})
