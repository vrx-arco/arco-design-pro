import { RouteRecordRaw, RouteRecordName } from 'vue-router'

export const filterRoutes = (
  routes: RouteRecordRaw[],
  permission: any,
  filter: (route: RouteRecordRaw, permission: any) => boolean
) => {
  const filterRoutes: RouteRecordRaw[] = []
  const nameList = new Set<RouteRecordName>()
  const listFilter = (routes: RouteRecordRaw[], filterRoutes: RouteRecordRaw[]) => {
    routes.some((item) => {
      const children = item.children
      if (!item.name) {
        return true
      }
      nameList.add(item.name)
      if (!filter(item, permission)) {
        return true
      }

      if (!Array.isArray(children) || !children.length) {
        filterRoutes.push(item)
        return false
      }
      const _filterRoute = { ...item, children: [] as RouteRecordRaw[] }
      filterRoutes.push(_filterRoute)

      _filterRoute.children = listFilter(children, _filterRoute.children)

      return false
    })
    return filterRoutes
  }

  return [listFilter(routes, filterRoutes), nameList] as const
}
