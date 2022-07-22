import { CssRender } from 'css-render'
import { plugin as bem } from '@css-render/plugin-bem'

export const blockPrefix = '.vrx-arco-'

const { use: CssRenderUse, c } = CssRender()

const bemPlugin = bem({
  blockPrefix,
})

CssRenderUse(bemPlugin)
const { cB, cM, cE } = bemPlugin
export { c, cB, cM, cE }
