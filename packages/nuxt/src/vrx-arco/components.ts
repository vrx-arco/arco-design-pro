import { addComponent } from '@nuxt/kit'
import * as obj from '@vrx-arco/pro-components'

export const vrxArcoComponents = () => {
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
}
