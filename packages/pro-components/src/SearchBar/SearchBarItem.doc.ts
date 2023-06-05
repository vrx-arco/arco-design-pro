import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'SearchBarItem',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  arco: ['Grid', 'Form'],
})
