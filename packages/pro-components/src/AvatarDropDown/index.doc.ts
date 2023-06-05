import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'AvatarDropDown',
  slots: {
    default: {
      desc: '头像内部渲染插槽',
    },
    content: {
      desc: '自定义下拉框渲染插槽',
    },
  },
  events: {
    select: {
      type: '[select: string]',
      desc: '下拉框选择事件',
    },
  },
  arco: ['Avatar', 'Dropdown'],
})
