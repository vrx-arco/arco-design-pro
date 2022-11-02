import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'LoginPage',
  props: {
    logo: {
      type: 'string',
      desc: 'logo',
    },
    title: {
      type: 'string',
      desc: '标题',
    },
    bannerTitle: {
      type: 'string',
      desc: '左侧介绍页标题',
    },
    bannerSubtitle: {
      type: 'string',
      desc: '左侧介绍页副标题',
    },
    bannerImage: {
      type: 'string',
      desc: '左侧介绍页图片',
    },
    formTitle: {
      type: 'string',
      desc: '登录表单标题',
    },
    formSubtitle: {
      type: 'string',
      desc: '登录表单副标题',
    },
    formForget: {
      type: 'boolean',
      desc: '登录表单忘记密码功能',
    },
    formRegister: {
      type: 'boolean',
      desc: '登录表单注册功能',
    },
    formRemember: {
      type: 'boolean',
      desc: '登录表单记住密码功能',
    },
    model: {
      type: 'object',
      desc: '传入任何数据外部受控表单数据',
    },
  },
  slots: [
    {
      name: 'logo',
      desc: 'logo',
    },
    {
      name: 'title',
      desc: 'title',
    },
    {
      name: 'bannerTitle',
      desc: '左侧介绍页标题',
    },
    {
      name: 'bannerSubtitle',
      desc: '左侧介绍页副标题',
    },
    {
      name: 'bannerImage',
      desc: '左侧介绍页图片',
    },
    {
      name: 'formTitle',
      desc: '登录表单标题',
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
