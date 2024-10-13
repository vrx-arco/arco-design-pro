import { addComponent } from '@nuxt/kit'
import { vrxArco, vrxArcoColorPicker } from '../config'

export const vrxArcoComponents = () => {
  vrxArco.forEach((key) => {
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

export const vrxArcoColorPickerComponents = () => {
  vrxArcoColorPicker.forEach((key) => {
    if (/^[a-z]/.test(key)) {
      return
    }
    addComponent({
      name: key,
      filePath: '@vrx-arco/color-picker',
      export: key,
      global: false,
    })
  })
}
