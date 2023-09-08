import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'SearchBar',
  slots: {
    default: {
      desc: '默认插槽',
    },
  },
  events: {
    search: {
      desc: '点击搜索按钮的回调，返回promise时，会自动显示加载动画',
    },
    reset: {
      desc: '点击重置按钮的回调，返回promise时，会自动显示加载动画',
    },
  },
  arco: ['Button', 'Form', 'Grid', 'Space'],
})
