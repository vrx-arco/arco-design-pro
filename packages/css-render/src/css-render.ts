import { CNodeChildren, CssRender, createCNode, CSelector, CLazySelector } from 'css-render'
import { plugin as bem } from '@css-render/plugin-bem'
import { MountOption } from 'css-render/lib/types'
import { onBeforeMount } from 'vue'

export interface CreateBemCssRender {
  c: createCNode<CSelector>
  cB: createCNode<string | CLazySelector<string>>
  cM: createCNode<string | CLazySelector<string>>
  cE: createCNode<string | CLazySelector<string>>
  createCss: (
    id: string,
    cssChildren: CNodeChildren,
    options?: Omit<MountOption, 'id'>
  ) => () => {
    bemClass: (name?: string) => string
  }
}

/**
 * 创建一个装载 bem插件的css-render
 * @param blockPrefix
 */
export const createBemCssRender = (blockPrefix = 'vrx-arco'): CreateBemCssRender => {
  const { use: CssRenderUse, c } = CssRender()

  const bemPlugin = bem({
    blockPrefix: `.${blockPrefix}-`,
  })

  CssRenderUse(bemPlugin)

  const { cB, cM, cE } = bemPlugin

  const createCss = (
    id: string,
    cssChildren: CNodeChildren,
    options: Omit<MountOption, 'id'> = {}
  ) => {
    const css = cB(id, cssChildren)
    return () => {
      onBeforeMount(() => {
        css.mount({ id, anchorMetaName: `${blockPrefix}-style`, ...options })
      })

      const bemClass = (name?: string) => {
        return `${blockPrefix}-${id}${name || ''}`
      }
      return {
        bemClass,
      }
    }
  }

  return {
    c,
    cB,
    cM,
    cE,
    createCss,
  }
}

const { c, cB, cM, cE, createCss } = createBemCssRender()

export { c, cB, cM, cE, createCss }
