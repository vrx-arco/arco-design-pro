import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchBarItem',
  props: {
    gridProps: {
      type: 'object',
      desc: '对 `search-bar` column 属性进行覆盖',
    },
    autoUpdate: {
      type: 'boolean｜string',
      desc: '对 `search-bar` autoUpdate 属性进行覆盖,或指定 v-model:arg arg的值',
    },
    field: {
      type: 'string',
      desc: '表单元素在数据对象中的path（数据项必填）',
    },
    label: {
      type: 'string',
      desc: '标签的文本',
    },
    showColon: {
      type: 'boolean',
      desc: '是否显示冒号',
    },
    noStyle: {
      type: 'boolean',
      desc: '是否去除样式',
    },
    disabled: {
      type: 'boolean',
      desc: '是否禁用',
    },
    help: {
      type: 'string',
      desc: '帮助文案',
    },
    extra: {
      type: 'string',
      desc: '额外显示的文案',
    },
    required: {
      type: 'boolean',
      desc: '是否必须填写',
    },
    rules: {
      type: 'FieldRule | FieldRule[]',
      desc: '表单项校验规则（优先级高于 form 的 rules）',
    },
    validateStatus: {
      type: '"success" | "warning" | "error" | "validating"',
      desc: '校验状态',
    },
    validateTrigger: {
      type: '"change" | "input" | "focus" | "blur"',
      desc: '校验状态',
    },
    labelColProps: {
      type: 'object',
      desc: '标签元素布局选项。参数同 col 组件一致',
    },
    wrapperColProps: {
      type: 'object',
      desc: '标签元素布局选项。参数同 col 组件一致',
    },
    hideLabel: {
      type: 'boolean',
      desc: '是否隐藏标签',
    },
    hideAsterisk: {
      type: 'boolean',
      desc: '是否隐藏星号',
    },
    labelColStyle: {
      type: 'object',
      desc: '标签元素布局组件的 style',
    },
    wrapperColStyle: {
      type: 'object',
      desc: '表单控件布局组件的 style',
    },
    rowProps: {
      type: 'object',
      desc: '表单项布局选项。参数同 row 组件一致',
    },
    rowClass: {
      type: 'string|array|object',
      desc: '表单项布局组件的 class',
    },
    contentClass: {
      type: 'string|array|object',
      desc: '表单控件包裹层的 class',
    },
    contentFlex: {
      type: 'boolean',
      desc: '内容层是否开启 flex 布局',
    },
    labelColFlex: {
      type: 'number|string',
      desc: '设置标签 Col 组件的 flex 属性。设置时表单 Col 组件的 flex 属性会被设置为 auto。',
    },
    feedback: {
      type: 'boolean',
      desc: '是否显示表单控件的反馈图标',
    },
    labelComponent: {
      type: 'string',
      desc: '表单项标签渲染的元素',
    },
    labelAttrs: {
      type: 'object',
      desc: '是否显示表单控件的反馈图标',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽',
    },
  ],
  events: [],
  arco: ['Col', 'Form'],
})
