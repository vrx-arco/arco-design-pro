import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'LoginForm',
  props: {
    title: {
      type: 'string',
      desc: '标题',
    },
    subtitle: {
      type: 'string',
      desc: '副标题',
    },
    submitNotice: {
      type: 'boolean',
      desc: '是否使用内置消息提示组件',
    },
    model: {
      type: 'object',
      desc: '传入任何数据外部受控表单数据',
    },
  },
  slots: [
    {
      name: 'title',
      desc: '替换标题与副标题',
    },
    {
      name: 'form',
      desc: '支持定义额外表单项',
    },
  ],
  events: [
    {
      name: 'submit',
      desc: '提交事件，请注意该方法必须返回一个promise',
    },
    {
      name: 'forget',
      desc: '忘记密码按钮点击事件',
    },
    {
      name: 'register',
      desc: '注册按钮点击事件',
    },
  ],
  arco: ['Button', 'Checkbox', 'Form', 'Input', 'Link', 'Message', 'Space'],
})
