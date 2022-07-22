import { CNodeChildren, createCssRender, c, cE } from '@vrx-arco/css-render'

const css: CNodeChildren = [
  c('&', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  }),
  cE('title', {
    color: 'var(--color-fill-1)',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '28px',
  }),
  cE('subtitle', {
    marginTop: '8px',
    color: 'var(--color-text-3)',
    fontSize: '14px',
    lineHeight: '22px',
  }),
  cE('image', {
    width: '70%',
    marginTop: '30px',
    objectFit: 'contain',
  }),
]

export const bannerStyle = createCssRender('login-page-banner', css)
