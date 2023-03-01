import { CLazySelector, CNodeChildren, CSelector, CssRender, createCNode } from 'css-render'
import { plugin as bem } from '@css-render/plugin-bem'
import { MountOption } from 'css-render/lib/types'
import { onBeforeMount } from 'vue'
import { useSsrAdapter } from '@css-render/vue3-ssr'

export type { createCNode, CLazySelector, CNodeChildren, MountOption, CSelector }

/**
 * 创建一个装载 bem插件的css-render
 * @param blockPrefix
 */
export const createBemCssRender = (blockPrefix = 'vrx-arco') => {
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
        css.mount({ id, anchorMetaName: `${blockPrefix}-style`, ...options, ssr: useSsrAdapter() })
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
