import { c, cE, CNodeChildren, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [
  c('&', { display: 'flex', height: '100%' }),
  c('@media (max-width: 992px)', [c('&', [cE('banner', { width: '25%' })])]),
]

export const loginPageStyle = createCssRender('login-page', css)
