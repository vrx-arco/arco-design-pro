import { addComponent } from '@nuxt/kit'
import { arco, arcoIcon } from '../config'

export const arcoComponents = () => {
  arco.forEach((item) => {
    addComponent({
      ...item,
      name: `A${item.name}`,
    })
  })
}

export const arcoIconComponents = () => {
  arcoIcon.forEach((item) => {
    addComponent(item)
  })
}
