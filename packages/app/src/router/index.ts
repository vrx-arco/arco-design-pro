import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { defineRouterPolice } from './police'
import { App } from 'vue'
import { IVrxArcoApp } from '../types'

export const defineRouter = (app: App, options: IVrxArcoApp) => {
  const { routes, pageNotFound } = options.router
  const router = createRouter({
    history: createWebHistory(),
    routes: [...routes, { path: '/:path(.*)*', ...pageNotFound } as RouteRecordRaw],
  })
  defineRouterPolice(router, options)
  app.use(router)
  return router
}
