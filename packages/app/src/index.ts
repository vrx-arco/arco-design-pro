import { createApp } from 'vue'
import { defineRouter } from './router'
import { definePinia } from './pinia'
import { IVrxArcoApp } from './types'
import { provideVrxArcoCheckPermission } from './permission'

export const createVrxArcoApp = (options: IVrxArcoApp) => {
  const { rootComponent, rootProps, rootContainer, immediate } = options

  const app = createApp(rootComponent, rootProps)

  const pinia = definePinia(app)

  const router = defineRouter(app, options)

  provideVrxArcoCheckPermission(app, options)

  const mount = async () => {
    await router.isReady()
    return app.mount(rootContainer)
  }

  if (immediate ?? true) {
    mount()
  }

  return { app, router, pinia, mount }
}

export { usePermissionStore } from './pinia'

export { Permission } from './permission'

export * from './types'
