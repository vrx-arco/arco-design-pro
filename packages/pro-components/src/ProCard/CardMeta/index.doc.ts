import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ProCardMeta',
  props: {
    title: {
      type: 'string | VNode',
      desc: '标题',
    },
    avatar: {
      type: 'VNode',
      desc: '头像',
    },
    description: {
      type: 'string | VNode',
      desc: '描述',
    },
    actions: {
      type: 'VNode[]',
      desc: '操作按钮',
    },
  },
  slots: [
    {
      name: 'title',
      desc: '标题',
    },
    {
      name: 'avatar',
      desc: '头像',
    },
    {
      name: 'description',
      desc: '描述',
    },
    {
      name: 'actions',
      desc: '操作按钮',
    },
  ],
  events: [],
  arco: [],
})
