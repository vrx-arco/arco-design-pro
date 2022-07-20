import { CNode } from 'css-render'
import { onBeforeMount } from 'vue'

export const createCssRender = (css: CNode) => {
  return () => {
    onBeforeMount(() => {
      css.mount()
    })
  }
}
