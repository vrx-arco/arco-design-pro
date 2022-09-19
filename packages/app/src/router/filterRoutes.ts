import { RouteRecordRaw, RouteRecordName } from 'vue-router'

export const filterRoutes = (
  routes: RouteRecordRaw[],
  permission: any,
  filter: (route: RouteRecordRaw, permission: any) => boolean
) => {
  const nameList = new Set<RouteRecordName>()
  const listFilter = (routes: RouteRecordRaw[]) => {
    return routes.filter((item) => {
      const children = item.children
      if (!item.name) {
        return false
      }
      nameList.add(item.name)
      if (!filter(item, permission)) {
        return false
      }

      if (!Array.isArray(children) || !children.length) {
        return true
      }

      item.children = listFilter(children)
      return true
    })
  }

  return [listFilter(routes), nameList] as const
}
