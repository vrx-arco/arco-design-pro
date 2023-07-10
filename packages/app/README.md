# @vrx-arco/app

集成 `vue-router`, `pinia`

快速完成对动态路由的支持

## 创建

```ts
import { Notification } from '@arco-design/web-vue'
import { createVrxArcoApp } from '@vrx-arco/app' 
import App from './App.vue'
import { basicRoutes, dynamicRoutes } from '@/router'
import { usePageStore } from '@/pinia'
import { getPermission } from '@/api'

createVrxArcoApp({
  // 根组件
  rootComponent: App,
  // 渲染根节点
  rootContainer: '#app',
  // 路由配置
  router: {
    // 静态路由部分
    routes: basicRoutes,
    // 动态路由部分
    dynamicRoutes,
    // 根据从远程获取的权限，筛选每个路由
    filterDynamicRoutes: (route, permission) => {
      return permission.includes(route.name)
    },
    // 页面未找到 路由
    pageNotFound: {
      name: 'page404',
      component: () => import('@/views/page/404.vue'),
      meta: {
        title: ''
      },
    },
    // 登陆过期重定向路由 name
    loginExpiredRedirect: 'login',
    // 未登陆时 路由通过 name 白名单
    whiteList: ['login', 'register']
  },
  // 路由遍历前后，添加加载状态控制
  loading: (value: boolean) => {
    const page = usePageStore()
    page.setLoading(value)
  },
  authentication: {
    /**
     * 从远程获取权限
     */
    getPermission: async () => {
      const permission = await getPermission()
      return permission
    },
    /**
     * 用于自定义局部鉴权
     */
    checkPermission: (permission, data) => {
      return true
    },
    /**
     * 判断是否已登陆
     */
    isLogin: () => !!localStorage.getItem('token'),
    // 登陆过期回调
    // 从远程获取权限报错，也会触发该方法
    onLoginExpired: () => {
      Notification.error({
        title: '提示',
        content: '请重新登陆'
      })
    },
  },
})
```

## 局部鉴权用组件

```vue
<script lang="ts" setup>
import { Permission } from '@vrx-arco/app'
import { Button, Switch } from '@arco-design/web-vue'
</script>

<template>

  <!--  data 传递给 authentication.checkPermission 用作鉴权-->
  <!--  当鉴权失败时，责销毁默认插槽内的组件-->
  <Permission data="user:add:edit">
    <Button>编辑</Button>
  </Permission>

  <!--  data 传递给 authentication.checkPermission 用作鉴权-->
  <!--  当鉴权失败时，hasPermission为 false，可自行处理组件无权限表现 -->
  <Permission data="user:add:del" :destroyOnNoPermission="false">
    <template v-slot="{hasPermission}">
      <Button :disabled="!hasPermission">删除</Button>
    </template>
  </Permission>

  <!--  data 传递给 authentication.checkPermission 用作鉴权-->
  <!--  当鉴权失败时，使用 noPermission插槽，自行处理无权限组件渲染 -->
  <Permission data="user:add:del">
    <template v-slot>
      <Switch />
    </template>
    <template #noPermission>
      是
    </template>
  </Permission>
</template>
```
