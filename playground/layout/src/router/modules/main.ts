import { RouteRecordRaw } from 'vue-router'
import { createVNode } from 'vue'
import { IconApps, IconArchive, IconTag, IconUser } from '@arco-design/web-vue/es/icon'

export const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: 'main',
    component: () => import('../../views/main'),
    redirect: '/main/500',
    meta: {
      title: 'main',
      icon: createVNode(IconApps),
    },
    children: [
      {
        name: 'loginPage',
        path: 'loginPage',
        component: () => import('../../views/loginPage'),
        meta: {
          title: '登陆页面',
          icon: createVNode(IconUser),
        },
      },
      {
        name: 'login',
        path: 'login',
        component: () => import('../../views/login'),
        meta: {
          title: '登陆表单',
          icon: createVNode(IconUser),
        },
      },
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
          hidden: true,
        },
      },
    ],
  },
]
