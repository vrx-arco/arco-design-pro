import { c, cE, createCss } from '@vrx-arco/css-render'

export const style = createCss('search-bar', [
  c('&', {
    width: '100%',
  }),
  cE('split', {
    height: '84px',
  }),
  cE('form', {}),
  cE('form-row', { width: '100%' }),
])
