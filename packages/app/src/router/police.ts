import { Router } from 'vue-router'
import { resetRoute } from './resetRoute'
import { filterRoutes } from './filterRoutes'
import { usePermissionStore } from '../pinia'
import { IDefineRouter } from '../types'

export const defineRouterPolice = (router: Router, options: IDefineRouter) => {
  const {
    loading,
    dynamicRoutes = [],
    checkPermission,
    filterDynamicRoutes = () => true,
    onLoginExpired,
    isLogin = () => true,
    loginExpiredRedirect,
    whiteList = [],
    pageNotFound,
  } = options

  router.beforeEach(async (to, _from, next) => {
    const permissionStore = usePermissionStore()
    // 加载开始
    loading?.(true)

    // 未登陆逻辑
    if (!isLogin()) {
      permissionStore.$reset()
      resetRoute(router)
      // 如果是白名单与登陆页，则放权
      if (to.name === loginExpiredRedirect || whiteList.includes(to.name as string)) {
        next()
        return
      }
      // 其他页面，在未登陆时，重定向至登陆页面
      next({ name: loginExpiredRedirect })
      return
    }

    // 如果登陆后访问登陆页，则触发登陆过期回调
    if (to.name === loginExpiredRedirect) {
      resetRoute(router)
      permissionStore.$reset()
      onLoginExpired?.()
      next()
      return
    }

    // 如果已经有缓存的 dynamicRoutes ,则直接放权
    if (!dynamicRoutes.length || permissionStore.dynamicRoutesName.length) {
      next()
      return
    }

    try {
      // 鉴权
      const permission = await Promise.resolve().then(checkPermission)
      // 根据权限筛选动态路由
      const [routes, routeNames] = filterRoutes(dynamicRoutes, permission, filterDynamicRoutes)
      permissionStore.setDynamicRoutesName(routeNames)
      routes.forEach((item) => {
        router.addRoute(item)
      })
    } catch (e) {
      resetRoute(router)
      permissionStore.$reset()
      next({ name: loginExpiredRedirect })
      onLoginExpired?.()
    }

    if (to.name === pageNotFound.name) {
      next({ path: to.fullPath, replace: true, query: to.query })
      return
    }
    next()
  })

  router.afterEach(() => {
    // 加载结束
    loading?.(false)
  })
}
