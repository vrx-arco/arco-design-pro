import { RouteRecordRaw } from 'vue-router'
import { Component } from 'vue'

export interface IDefineRouter {
  /**
   * 静态路由部分
   */
  routes: Readonly<RouteRecordRaw[]>
  /**
   *  路由遍历前后，添加加载状态控制
   * @param value
   */
  loading?: (value: boolean) => any
  /**
   * 从远程获取权限
   */
  checkPermission?: () => Promise<any> | any
  /**
   * 动态路由部分
   */
  dynamicRoutes?: RouteRecordRaw[]
  /**
   * 根据从远程获取的权限，筛选每个路由
   * @param route
   * @param permission
   */
  filterDynamicRoutes?: (route: RouteRecordRaw, permission: any) => boolean
  /**
   * 判断是否已登陆
   */
  isLogin?: () => boolean
  /**
   * 登陆过期回调
   * 从远程获取权限报错，也会触发该方法
   */
  onLoginExpired?: () => any
  /**
   * 登陆过期重定向路由 name
   */
  loginExpiredRedirect: string
  /**
   * 未登陆时 路由通过 name 白名单
   */
  whiteList?: string[]
  /**
   *  页面未找到 路由
   */
  pageNotFound: Omit<RouteRecordRaw, 'path'>
}

export interface ICreateVrxArco {
  /**
   * 根组件
   */
  rootComponent: Component
  /**
   * 根组件 props
   */
  rootProps?: Record<string, any>
  /**
   * 渲染根节点
   */
  rootContainer: Element | string
  /**
   * 路由配置
   */
  router: IDefineRouter
}
