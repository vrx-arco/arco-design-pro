import { createCss, cE, c } from '@vrx-arco/css-render'

export const style = createCss('pro-card-meta', [
  c('&', { color: 'var(--color-text-1)' }),
  cE('avatar', { float: 'left', paddingRight: '16px' }),
  cE('title', {
    overflow: 'hidden',
    fontWeight: 500,
    fontSize: '18px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginBottom: '8px',
  }),
  cE('detail', { overflow: 'hidden' }),
  cE('actions', { margin: 0, padding: 0, paddingTop: '20px', listStyle: 'none', display: 'flex' }, [
    c(
      '& > li',
      {
        textAlign: 'center',
      },
      [
        c(
          'span',
          {
            position: 'relative',
            display: 'block',
            fontSize: '14px',
            lineHeight: '14px',
            cursor: 'pointer',
          },
          [c('&:hover', { color: 'rgb(var(--primary-6))', transition: 'color 0.3s' })]
        ),
      ]
    ),
  ]),
])
