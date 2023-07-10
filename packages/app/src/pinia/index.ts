import { createPinia } from 'pinia'
import { App } from 'vue'

export * from './usePermissionStore'
export const definePinia = (app: App) => {
  app.use(createPinia())
}
