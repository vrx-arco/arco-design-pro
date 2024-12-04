import { RouteRecordRaw, type RouterOptions } from 'vue-router'
import { Component } from 'vue'

export type IVrxArcoCheckPermission = (permission: any, data: any) => boolean

export interface IVrxArcoRouter {
  /**
   * 静态路由部分
   */
  routes: Readonly<RouteRecordRaw[]>

  /**
   * 自定义路由创建参数
   * ```ts
   * createRouter({...options})
   * ```
   */
  options?: Omit<Partial<RouterOptions>, 'routes'>
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

export interface IVrxArcAuthentication {
  /**
   * 判断是否已登陆
   */
  isLogin?: () => boolean | Promise<boolean>
  /**
   * 登陆过期回调
   * 从远程获取权限报错，也会触发该方法
   */
  onLoginExpired?: () => any

  /**
   * 从远程获取权限
   */
  getPermission?: () => Promise<any> | any

  /**
   * 用于自定义局部鉴权
   */
  checkPermission?: IVrxArcoCheckPermission
}

export interface IVrxArcoApp {
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
  router: IVrxArcoRouter

  /**
   *  路由遍历前后，添加加载状态控制
   * @param value
   */
  loading?: (value: boolean) => any

  authentication?: IVrxArcAuthentication

  /**
   * 是否立即初始化 vue app
   *
   * 设置为 false 可以取消默认的 vue app 初始化行为
   * @default true
   */
  immediate?: boolean
}
