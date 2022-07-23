import { RouteRecordRaw } from 'vue-router'
import { mainRoutes } from './main'
import { listModules } from './list'

export const moduleRoute: RouteRecordRaw[] = [...mainRoutes, ...listModules]
