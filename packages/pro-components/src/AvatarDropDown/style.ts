import { c, CNodeChildren, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [c('&', { cursor: 'pointer', userSelect: 'none' })]

export const style = createCssRender('avatar-dropdown', css)
