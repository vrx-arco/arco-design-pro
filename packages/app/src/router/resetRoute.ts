import { Router } from 'vue-router'
import { usePermissionStore } from '../pinia'

export const resetRoute = (router: Router) => {
  const permissionStore = usePermissionStore()
  permissionStore.dynamicRoutesName.forEach((item) => {
    if (!router.hasRoute(item)) {
      return
    }
    router.removeRoute(item)
  })
}
