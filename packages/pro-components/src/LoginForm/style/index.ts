import { cB, cE, createCssRender } from '@vrx-arco/css-render'

const css = cB('login-form', [
  cE('title', {
    color: 'var(--color-text-1)',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '32px',
  }),
  cE('subtitle', { color: 'var(--color-text-3)', fontSize: '16px', lineHeight: '24px' }),
  cE('error-msg', { height: '32px', color: 'rgb(var(--red-6))', lineHeight: '32px' }),
  cE('password-actions', { display: 'flex', justifyContent: 'space-between' }),
  cE('register-btn', { color: 'var(--color-text-3)' }),
])

export const style = createCssRender(css)
