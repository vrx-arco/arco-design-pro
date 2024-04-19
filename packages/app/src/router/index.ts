import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import { IVrxArcoApp } from '../types'
import { defineRouterPolice } from './police'

export const defineRouter = (app: App, options: IVrxArcoApp) => {
  const { routes, pageNotFound, options: routerOptions } = options.router
  const router = createRouter({
    history: createWebHistory(),
    routes: [...routes, { path: '/:path(.*)*', ...pageNotFound } as RouteRecordRaw],
    ...routerOptions,
  })
  defineRouterPolice(router, options)
  app.use(router)
  return router
}
