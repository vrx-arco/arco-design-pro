import { CNode } from 'css-render'
import { onBeforeMount } from 'vue'
import { MountOption } from 'css-render/lib/types'

export const createCssRender = (css: CNode, options: MountOption = {}) => {
  return () => {
    onBeforeMount(() => {
      css.mount({ anchorMetaName: 'vrx-arco-style', ...options })
    })
  }
}
