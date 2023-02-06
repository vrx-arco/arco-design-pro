import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchLayoutContent',
  props: {
    useTabs: {
      type: 'boolean',
      desc: '是否使用内置Tabs',
    },
    tabs: {
      type: 'SearchLayoutContentTab[]',
      desc: 'tab 配置',
    },
    tabsType: {
      type: 'TabsType',
      desc: 'tab类型',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [
    {
      name: 'tabChange',
      desc: '内置tab切换事件',
    },
  ],
  arco: ['Layout', 'Tabs'],
})
