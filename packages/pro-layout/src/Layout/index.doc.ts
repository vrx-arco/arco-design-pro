import { defineGenDoc } from '@vrx-arco/shared'
export default defineGenDoc({
  name: 'ProLayout',
  slots: {
    logo: {
      desc: 'logo',
    },
    title: {
      desc: '标题',
    },
    logoContainer: {
      desc: '覆盖logo+标题的整个区域',
    },
    headerToolbox: {
      desc: '头部布局右侧工具栏',
    },
    default: {
      desc: '布局默认插槽-不使用该插槽时默认使用 RouterView',
    },
    navContent: {
      desc: '布局顶部中央空余',
    },
  },
  arco: ['Drawer', 'Layout', 'Scrollbar', 'Spin', 'Menu', 'Space', 'Typography'],
})
