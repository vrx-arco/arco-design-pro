import { inject, provide, ref, Ref } from 'vue'

export interface SearchLayoutContext {
  type: Ref<'card' | 'normal'>
  title: Ref<string | undefined>
  bemClass: (name: string) => string
}

export const SearchLayoutSymbol = Symbol('SearchLayout')

export const provideSearchLayout = (props: SearchLayoutContext) =>
  provide<SearchLayoutContext>(SearchLayoutSymbol, props)

export const injectSearchLayout = () =>
  inject<SearchLayoutContext>(SearchLayoutSymbol, {
    type: ref('normal'),
    title: ref(),
    bemClass: (name) => name,
  })
