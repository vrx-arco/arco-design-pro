import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineRouterPolice } from './police'
import { App } from 'vue'
import { IDefineRouter } from '../types'

export const defineRouter = (app: App, options: IDefineRouter) => {
  const { routes } = options
  const router = createRouter({
    history: createWebHistory(),
    routes: [...routes, { path: '/:path(.*)*', ...options.pageNotFound } as RouteRecordRaw],
  })
  defineRouterPolice(router, options)
  app.use(router)
  return router
}
