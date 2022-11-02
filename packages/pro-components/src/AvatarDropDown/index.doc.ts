import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'AvatarDropDown',
  props: {
    username: {
      type: 'string',
      desc: '用户名',
    },
    dropdown: {
      type: 'UserAvatarDropDownItem[]',
      desc: '下拉框选项',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '头像内部渲染插槽',
    },
    {
      name: 'content',
      desc: '自定义下拉框渲染插槽',
    },
  ],
  events: [
    {
      name: 'select',
      desc: '下拉框选择事件',
    },
  ],
  arco: ['Avatar', 'Dropdown'],
})
