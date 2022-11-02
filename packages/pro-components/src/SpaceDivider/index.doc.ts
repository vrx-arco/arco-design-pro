import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SpaceDivider',
  props: {
    direction: {
      type: "'vertical'|'horizontal'",
      desc: '布局方向',
    },
    align: {
      type: "'start'｜ 'end'｜ 'center'｜'baseline'",
      desc: '对齐方向',
    },
    fill: {
      type: 'boolean',
      desc: '是否占满',
    },
    size: {
      type: 'number',
      desc: '分割线宽度',
    },
    gap: {
      type: 'number｜string',
      desc: '分割线间距',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [],
  arco: ['Divider'],
})
