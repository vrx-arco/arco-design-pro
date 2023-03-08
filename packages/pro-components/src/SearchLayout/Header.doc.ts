import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchLayoutHeader',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  arco: ['Card', 'Divider', 'Layout'],
})
