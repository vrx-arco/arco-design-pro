import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'SearchBar',
  props: {
    model: {
      type: 'object',
      desc: '数据源 * 如需要使用自动重置，自动验证功能 该选项必填*',
    },
    labelColProps: {
      type: 'object',
      desc: 'label 的栅格布局',
    },
    wrapperColProps: {
      type: 'object',
      desc: 'content 的栅格布局',
    },
    disabled: {
      type: 'boolean',
      desc: '禁用表单',
    },
    rules: {
      type: 'object',
      desc: '表单验证规则',
    },
    resetOnButtonClick: {
      type: 'boolean',
      desc: '点击重置按钮的时候根据`model` 初始值自动重置表单',
    },
    validOnButtonClick: {
      type: 'boolean',
      desc: '点击搜索按钮的时候触发验证',
    },
    column: {
      type: 'number｜CardListColumnGrid',
      desc: '表单栅格布局',
    },
    autoUpdate: {
      type: 'boolean',
      desc: '劫持`search-bar-item` 第一个元素 自动绑定 `v-model`',
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
      name: 'search',
      desc: '点击搜索按钮的回调，返回promise时，会自动显示加载动画',
    },
    {
      name: 'reset',
      desc: '点击重置按钮的回调，返回promise时，会自动显示加载动画',
    },
  ],
  arco: ['Button', 'Divider', 'Form', 'Grid', 'Space'],
})
