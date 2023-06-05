const prefix = 'vrx-arco'

export const style = (namespace: string) => ({
  bemClass: (id?: string) => `${prefix}-${namespace}${id || ''}`,
})
