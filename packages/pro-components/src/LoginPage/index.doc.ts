import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'LoginPage',
  slots: {
    logo: {
      desc: 'logo',
    },
    title: {
      desc: 'title',
    },
    bannerTitle: {
      desc: '左侧介绍页标题',
    },
    bannerSubtitle: {
      desc: '左侧介绍页副标题',
    },
    bannerImage: {
      desc: '左侧介绍页图片',
    },
    formTitle: {
      desc: '登录表单标题',
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
