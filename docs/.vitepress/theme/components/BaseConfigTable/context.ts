import { inject, provide } from 'vue'

const BaseConfigTableSymbol = Symbol('BaseConfigTable')

export interface BaseConfigTableProvide {
  push: (data: any) => any
}

export function provideBaseConfigTable(data: BaseConfigTableProvide) {
  return provide<BaseConfigTableProvide>(BaseConfigTableSymbol, data)
}

export function injectBaseConfigTable() {
  return inject<BaseConfigTableProvide>(BaseConfigTableSymbol, { push: () => null })
}
