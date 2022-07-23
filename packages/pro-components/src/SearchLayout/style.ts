import { c, cE, cM, createCss } from '@vrx-arco/css-render'

export const style = createCss('search-layout', [
  c(
    '&-card',
    {
      height: '100%',
    },
    [
      c('& > .arco-card-header', {
        border: 'none',
      }),
    ]
  ),
  c('&', { height: '100%' }),
  cM('card', {
    borderBottom: '1px solid var(--color-neutral-3)',
    background: 'var(--color-bg-2)',
    borderRadius: 'var(--border-radius-none)',
  }),
  cE('header', { paddingBottom: '16px' }, [
    cM('card', {
      paddingBottom: 0,
    }),
  ]),
  cE('header-divider', { padding: '0 16px' }, [c('.arco-divider-horizontal', { margin: 0 })]),

  cE('content', {
    background: 'var(--color-bg-2)',
    borderRadius: 'var(--border-radius-none)',
    padding: '16px',
  }),
])
