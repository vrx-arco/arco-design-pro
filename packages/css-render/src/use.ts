import { CNodeChildren } from 'css-render'
import { onBeforeMount } from 'vue'
import { MountOption } from 'css-render/lib/types'
import { blockPrefix, cB } from './css-render'
export { type CNodeChildren }
export const createCssRender = (
  id: string,
  cssChildren: CNodeChildren,
  options: Omit<MountOption, 'id'> = {}
) => {
  const css = cB(id, cssChildren)
  return () => {
    onBeforeMount(() => {
      css.mount({ id, anchorMetaName: 'vrx-arco-style', ...options })
    })

    const bemClass = (name?: string) => {
      return `${blockPrefix}${id}${name || ''}`
    }
    return {
      bemClass,
    }
  }
}
