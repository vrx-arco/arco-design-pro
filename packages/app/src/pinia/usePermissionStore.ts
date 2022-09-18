import { defineStore } from 'pinia'
import { RouteRecordName } from 'vue-router'

export const usePermissionStore = defineStore('vrx-permission', {
  state: () => ({
    dynamicRoutesName: new Set<RouteRecordName>(),
  }),
  actions: {
    setDynamicRoutesName(routesName: Set<RouteRecordName>) {
      this.dynamicRoutesName = routesName
    },
  },
})
