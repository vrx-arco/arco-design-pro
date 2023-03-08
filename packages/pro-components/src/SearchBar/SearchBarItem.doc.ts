import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchBarItem',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  arco: ['Grid', 'Form'],
})
