import { RouteRecordRaw } from 'vue-router'

export const listModules: RouteRecordRaw[] = [
  {
    name: 'list',
    path: '/list',
    component: () => import('../../views/main'),
    meta: {
      title: '列表页',
    },
    children: [
      {
        name: 'search-layout',
        path: 'search-layout',
        component: () => import('../../views/list/SearchLayoutX.vue'),
        meta: {
          title: '搜索布局',
        },
      },
      {
        name: 'search-layout-x',
        path: 'search-layout-x',
        component: () => import('../../views/list/SearchLayoutX.vue'),
        meta: {
          title: '搜索布局',
          hidden: true,
        },
      },
    ],
  },
]
