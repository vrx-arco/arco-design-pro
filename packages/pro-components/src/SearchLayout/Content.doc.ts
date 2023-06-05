import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'SearchLayoutContent',
  slots: {
    default: {
      desc: '默认插槽',
    },
    tabExtra: {
      desc: 'tab额外插槽',
    },
  },
  events: {
    tabChange: {
      desc: '内置tab切换事件',
    },
  },
  arco: ['Layout', 'Tabs'],
})
