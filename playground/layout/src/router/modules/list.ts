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
        component: () => import('../../views/list/SearchLayout.vue'),
        meta: {
          title: '搜索布局',
        },
      },
    ],
  },
]
