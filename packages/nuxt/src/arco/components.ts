import * as arco from '@arco-design/web-vue/es'
import { addComponent } from '@nuxt/kit'

export const arcoComponents = () => {
  Object.keys(arco).forEach((key) => {
    if (/^[a-z]/.test(key)) {
      return
    }
    addComponent({
      name: `A${key}`,
      filePath: '@arco-design/web-vue',
      export: key,
      global: false,
    })
  })
}
