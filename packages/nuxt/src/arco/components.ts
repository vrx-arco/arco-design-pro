import { addComponent } from '@nuxt/kit'
import { arco, arcoIcon } from '../config'

export const arcoComponents = () => {
  arco.forEach((key) => {
    addComponent({
      name: `A${key}`,
      filePath: '@arco-design/web-vue',
      export: key,
      global: false,
    })
  })
}

export const arcoIconComponents = () => {
  arcoIcon.forEach((key) => {
    addComponent({
      name: key,
      filePath: '@arco-design/web-vue/es/icon',
      export: key,
      global: false,
    })
  })
}
