import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'ProCardMeta',
  slots: {
    title: {
      desc: '标题',
    },
    avatar: {
      desc: '头像',
    },
    description: {
      desc: '描述',
    },
    actions: {
      desc: '操作按钮',
    },
  },
  arco: [],
})
