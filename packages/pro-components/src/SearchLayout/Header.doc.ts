import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchLayoutHeader',
  props: {},
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [],
  arco: ['Card', 'Divider', 'Layout'],
})
