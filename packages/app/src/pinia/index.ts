import { createPinia } from 'pinia'
import { App } from 'vue'

export * from './usePermissionStore'
export const definePinia = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
  return pinia
}
