import { c, cE, createCss } from '@vrx-arco/css-render'

export const style = createCss('pro-pagination', [
  c('&', { height: '100%' }),
  cE('header', { paddingBottom: '16px' }),
  cE('content', { overflow: 'auto', borderRadius: 'var(--border-radius-small)' }),
  cE('footer', { paddingTop: '16px' }),
  cE('pagination', { float: 'right' }, [c('.arco-input-wrapper', { width: '40px' })]),
])
