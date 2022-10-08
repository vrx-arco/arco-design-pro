import { c, createCss } from '@vrx-arco/css-render'

export const style = createCss('space-divider', [
  c('&', { display: 'inline-flex' }),
  c('&-fill', {
    display: 'flex',
  }),
  c('&-vertical', { flexDirection: 'column' }),
  c('&-align', [
    c('&-start', {
      alignItems: 'flex-start',
    }),
    c('&-base-line', {
      alignItems: 'baseline',
    }),
    c('&-center', {
      alignItems: 'center',
    }),
    c('&-end', {
      alignItems: 'flex-end',
    }),
    c('&-wrap', {
      flexWrap: 'wrap',
    }),
  ]),
])
