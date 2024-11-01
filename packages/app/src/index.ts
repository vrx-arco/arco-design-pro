import { createApp } from 'vue'
import { defineRouter } from './router'
import { definePinia } from './pinia'
import { IVrxArcoApp } from './types'
import { provideVrxArcoCheckPermission } from './permission'

export const createVrxArcoApp = (options: IVrxArcoApp) => {
  const { rootComponent, rootProps, rootContainer } = options

  const app = createApp(rootComponent, rootProps)

  const pinia = definePinia(app)

  const router = defineRouter(app, options)

  provideVrxArcoCheckPermission(app, options)

  router.isReady().then(() => {
    app.mount(rootContainer)
  })

  return { app, router, pinia }
}

export { usePermissionStore } from './pinia'

export { Permission } from './permission'

export * from './types'
