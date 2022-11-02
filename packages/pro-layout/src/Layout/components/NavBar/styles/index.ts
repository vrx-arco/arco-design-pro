import { c, cE, CNodeChildren, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [
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
  cE('left-side--smaller', {
    fontSize: '22px',
    cursor: 'pointer',
    marginLeft: '20px',
    color: 'var(--color-text-2)',
  }),
]

export const style = createCssRender('pro-layout-navbar', css)
