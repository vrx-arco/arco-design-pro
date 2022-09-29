import { defineStore } from 'pinia'
import { RouteRecordName, RouteRecordRaw } from 'vue-router'

export const usePermissionStore = defineStore('vrx-permission', {
  state: () => ({
    dynamicRoutesName: [] as RouteRecordName[],
    dynamicRoutes: [] as RouteRecordRaw[],
    permission: null as any,
  }),
  actions: {
    setDynamicRoutesName(routesName: Set<RouteRecordName>) {
      this.dynamicRoutesName = [...routesName]
    },
  },
})
