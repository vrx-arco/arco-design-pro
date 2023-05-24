import { addComponent, addPluginTemplate, addVitePlugin, defineNuxtModule } from '@nuxt/kit'
import { pluginTemplate } from './plugin'
import { vrxArcoUnplugin } from './vrxArcoUnplugin'
import * as obj from '@vrx-arco/pro-components'
export default defineNuxtModule({
  meta: {
    name: 'vrx-arco',
  },
  setup(_, nuxt) {
    addPluginTemplate({
      filename: 'vrx-arco.mjs',
      getContents: () => pluginTemplate,
      mode: 'server',
      write: true,
    })
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
