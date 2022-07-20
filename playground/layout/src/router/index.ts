import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import { routes } from './modules'

export const defineRouter = (app: App) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router)
  return router
}
