import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'LoginForm',
  slots: {
    title: {
      desc: '替换标题与副标题',
    },
    form: {
      desc: '支持定义额外表单项',
    },
  },
  events: {
    submit: {
      desc: '提交事件，请注意该方法必须返回一个promise',
    },
    forget: {
      desc: '忘记密码按钮点击事件',
    },
    register: {
      desc: '注册按钮点击事件',
    },
  },
  arco: ['Button', 'Checkbox', 'Form', 'Input', 'Link', 'Message', 'Space'],
})
