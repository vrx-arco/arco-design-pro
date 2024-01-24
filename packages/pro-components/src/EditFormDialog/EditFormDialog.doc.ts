import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'EditFormDialog',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  events: {
    confirm: {
      desc: '表单提交事件，使用该事件，会覆盖 props.add props.edit',
    },
    success: {
      desc: '表单提交成功弹框关闭回调',
    },
    close: {
      desc: '弹框关闭回调',
    },
  },
  arco: ['Drawer', 'Form', 'Modal', 'Notification'],
})
