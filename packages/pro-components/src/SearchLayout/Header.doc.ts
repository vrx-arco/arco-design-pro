import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'SearchLayoutHeader',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  arco: ['Card', 'Divider', 'Layout'],
})
