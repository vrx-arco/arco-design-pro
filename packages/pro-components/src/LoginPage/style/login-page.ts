import { c, cE, CNodeChildren, createCssRender } from '@vrx-arco/css-render'

const css: CNodeChildren = [
  c('&', {
    height: '100%',
    backgroundColor: 'var(--color-bg-2)',
  }),
  cE('sider', {
    background: 'linear-gradient(163.85deg, #1d2129 0%, #00308f 100%)',
  }),
  cE('sider-inner', {
    height: '100%',
  }),
  cE('logo-container', {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '24px',
  }),
  cE('logo-text', {
    marginLeft: '4px',
    marginRight: '4px',
    color: 'var(--color-text-1)',
    fontSize: '20px',
  }),
  cE('content', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  cE('form', {
    width: '70%',
    maxWidth: '300px',
  }),
]

export const loginPageStyle = createCssRender('login-page', css)
