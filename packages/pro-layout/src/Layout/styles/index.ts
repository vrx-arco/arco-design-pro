import { c, cE, createCssRender } from '@vrx-arco/css-render'

export const style = createCssRender('pro-layout', [
  c('&', { height: '100%', backgroundColor: 'var(--color-bg-2)' }),
  cE('header', { height: '64px', borderBottom: '1px solid var(--color-border)' }),
  cE('wrap', { height: '100%' }),
  cE('content', { backgroundColor: 'var(--color-fill-2)', minHeight: 0 }),
  cE('wrap-container', { minHeight: 0 }),
  c('&__spin', { width: '100%', height: '100%' }),
  c('&__smaller-menu-drawer', [
    c('.arco-drawer', {
      backgroundColor: 'var(--color-menu-light-bg)',
    }),
  ]),
])
