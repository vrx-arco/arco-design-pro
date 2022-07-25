import { c, cE, createCss } from '@vrx-arco/css-render'

export const style = createCss('pro-pagination', [
  c('&', { height: '100%' }),
  cE('content', { overflow: 'auto' }),
  cE('footer', { paddingTop: '16px' }),
  cE('pagination', { float: 'right' }),
])
