import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'EditFormDialog',
  props: {
    type: {
      type: 'string',
      desc: '"drawer"|"modal"',
    },
    id: {
      type: 'string',
      desc: '根据表单数据model[id] 是否存在，判断是否为编辑状态',
    },
    model: {
      type: 'object',
      desc: '外部获取表单数据',
    },
    title: {
      type: 'string',
      desc: '标题',
    },
    width: {
      type: 'string|number',
      desc: '弹框宽度',
    },
    rules: {
      type: 'object',
      desc: '表单验证规则',
    },
    disabled: {
      type: 'boolean',
      desc: '是否禁用表单',
    },
    unmountOnClose: {
      type: 'boolean',
      desc: '是否在弹框关闭时销毁整个表单',
    },
    add: {
      type: '(model: Record<string, any>) => Promise<any>',
      desc: '新增回调方法',
    },
    edit: {
      type: '(model: Record<string, any>) => Promise<any>',
      desc: '新增回调方法',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [
    {
      name: 'confirm',
      desc: '表单提交事件，使用该事件，会覆盖 props.add props.edit',
    },
    {
      name: 'success',
      desc: '表单提交成功弹框关闭回调',
    },
    {
      name: 'close',
      desc: '弹框关闭回调',
    },
  ],
  arco: ['Drawer', 'Form', 'Modal', 'Notification'],
})
