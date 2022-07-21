import { c, cB, cE, createCssRender } from '@vrx-arco/css-render'

const css = cB('page-wrapper', [
  c('&', {
    height: '100%',
    padding: '0 20px',
  }),
  cE('header', { padding: '16px 0' }),
  cE('breadcrumb-item', { cursor: 'pointer' }),
])

export const style = createCssRender(css)
