import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchLayout',
  props: {
    type: {
      type: "'card'｜'normal'",
      desc: '布局类型 normal- 分体式卡片 card - 一体式卡片',
    },
    title: {
      type: 'string',
      desc: '标题',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [],
  arco: ['Layout'],
})
