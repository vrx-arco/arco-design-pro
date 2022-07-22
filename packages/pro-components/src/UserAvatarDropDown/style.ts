import { c, cB, createCssRender } from '@vrx-arco/css-render'

const css = cB('user-avatar-dropdown', [c('&', { cursor: 'pointer', userSelect: 'none' })])

export const style = createCssRender(css, { id: 'user-avatar-dropdown' })
