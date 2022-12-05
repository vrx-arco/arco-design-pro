import { CNodeChildren, c, cE, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [
  c('&', {
    height: '100%',
    padding: '0 20px !important',
  }),
  cE('header', { padding: '16px 0' }),
  cE('content', { paddingBottom: '16px', minHeight: 0 }),
  cE('breadcrumb-item', { cursor: 'pointer' }),
]

export const style = createCssRender('page-wrapper', css)
