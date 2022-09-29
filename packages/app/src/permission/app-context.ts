import { App, inject } from 'vue'
import { IVrxArcoApp, IVrxArcoCheckPermission } from '../types'

const VrxArcoPermissionContext = Symbol('VrxArcoPermissionContext')

export const provideVrxArcoCheckPermission = (app: App, options: IVrxArcoApp) => {
  app.provide<IVrxArcoCheckPermission>(
    VrxArcoPermissionContext,
    options.authentication?.checkPermission || (() => true)
  )
}

export const useVrxArcoCheckPermission = () => {
  return inject<IVrxArcoCheckPermission>(VrxArcoPermissionContext, () => true)
}
