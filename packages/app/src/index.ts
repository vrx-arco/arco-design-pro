import { createApp } from 'vue'
import { defineRouter } from './router'
import { definePinia } from './pinia'
import { ICreateVrxArco } from './types'

export const createVrxArcoApp = (options: ICreateVrxArco) => {
  const { rootComponent, rootProps, rootContainer } = options
  const app = createApp(rootComponent, rootProps)
  definePinia(app)
  const router = defineRouter(app, options.router)
  router.isReady().then(() => {
    app.mount(rootContainer)
  })
  return { app, router }
}

export { usePermissionStore } from './pinia'
export * from './types'
