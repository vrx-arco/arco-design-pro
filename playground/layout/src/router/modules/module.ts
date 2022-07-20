import { RouteRecordRaw } from 'vue-router'
import { IconApps, IconArchive, IconTag } from '@arco-design/web-vue/es/icon'
import { createVNode } from 'vue'
export const moduleRoute: RouteRecordRaw[] = [
  {
    name: 'main',
    path: 'main',
    component: () => import('../../views/main'),
    meta: {
      title: 'main',
      icon: createVNode(IconApps),
    },
    children: [
      {
        name: '404',
        path: '404',
        component: () => import('../../views/404'),
        meta: {
          title: '404',
          icon: createVNode(IconArchive),
        },
      },
      {
        name: '500',
        path: '500',
        component: () => import('../../views/500'),
        meta: {
          title: '500',
          icon: createVNode(IconTag),
        },
      },
    ],
  },
]
