import { c, cB, cE, createCssRender } from '@vrx-arco/css-render'

const css = cB('navbar', [
  c('&', {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: 'var(--color-bg-2)',
    paddingLeft: '20px',
    paddingRight: '20px',
  }),
  cE('left-side,right-side', {
    display: 'flex',
  }),
  cE('left-side', {
    justifyContent: 'center',
    alignItems: 'center',
  }),
])

export const style = createCssRender(css)
