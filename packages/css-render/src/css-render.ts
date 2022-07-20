import { CssRender } from 'css-render'
import { plugin as bem } from '@css-render/plugin-bem'

const { use: CssRenderUse, c } = CssRender()
const bemPlugin = bem({
  blockPrefix: '.vrx-arco-',
})
CssRenderUse(bemPlugin)
const { cB, cM, cE } = bemPlugin
export { c, cB, cM, cE }
