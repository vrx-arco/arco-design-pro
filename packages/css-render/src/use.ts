import { CNode } from 'css-render'
import { onBeforeMount } from 'vue'
import { MountOption } from 'css-render/lib/types'
import { blockPrefix } from './css-render'

export const createCssRender = (css: CNode, options: MountOption = {}) => {
  return () => {
    onBeforeMount(() => {
      css.mount({ anchorMetaName: 'vrx-arco-style', ...options })
    })
    const bemClass = (name: string) => {
      return `${blockPrefix}${options.id}__${name}`
    }
    return {
      bemClass,
    }
  }
}
