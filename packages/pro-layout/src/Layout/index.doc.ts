import { defineGenDoc } from '@vrx-arco/shared'
export default defineGenDoc({
  name: 'ProLayout',
  props: {
    menus: {
      type: 'RouteRecordRaw[]',
      desc: '基于路由信息生成的菜单',
    },
    title: {
      type: 'string',
      desc: '标题',
    },
    loading: {
      type: 'boolean',
      desc: '布局的全局加载状态',
    },
    logo: {
      type: 'string',
      desc: 'logo',
    },
  },
  slots: [
    {
      name: 'logo',
      desc: 'logo',
    },
    {
      name: 'title',
      desc: '标题',
    },
    {
      name: 'logoContainer',
      desc: '覆盖logo+标题的整个区域',
    },
    {
      name: 'headerToolbox',
      desc: '头部布局右侧工具栏',
    },
    {
      name: 'default',
      desc: '布局默认插槽-不使用该插槽时默认使用 RouterView',
    },
  ],
  events: [],
  arco: ['Drawer', 'Layout', 'Scrollbar', 'Spin', 'Menu', 'Space', 'Typography'],
})
