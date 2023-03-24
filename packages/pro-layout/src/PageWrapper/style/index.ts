import { CNodeChildren, c, cE, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [
  c('&', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  cE('header', { padding: '16px 20px' }),
  cE('content', { padding: '0 20px 16px 20px', minHeight: 0 }),
  cE('content--scrollbar', { minHeight: 0 }),
  cE('scrollbar--out', { height: '100%' }),
  cE('scrollbar', {
    height: '100%',
    padding: '0 20px 16px 20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
  }),
  cE('breadcrumb-item', { cursor: 'pointer' }),
]

export const style = createCssRender('page-wrapper', css)
