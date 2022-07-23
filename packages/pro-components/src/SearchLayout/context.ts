import { inject, provide } from 'vue'

export interface SearchLayoutContext {
  type: 'card' | 'normal'
  title?: string
  bemClass: (name: string) => string
}

export const SearchLayoutSymbol = Symbol('SearchLayout')

export const provideSearchLayout = (props: SearchLayoutContext) =>
  provide<SearchLayoutContext>(SearchLayoutSymbol, props)

export const injectSearchLayout = () =>
  inject<SearchLayoutContext>(SearchLayoutSymbol, {
    type: 'normal',
    bemClass: (name) => name,
  })
