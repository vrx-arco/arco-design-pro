import { ComputedRef, Ref, computed, inject, provide, ref } from 'vue'

const SearchBarSymbol = Symbol('SearchBar')
interface ProvideSearchBar {
  gridProps: ComputedRef<Record<string, any>>
  model: Ref<Record<string, any>>
  autoUpdate: Ref<boolean>
}
export const provideSearchBar = ({ gridProps, model, autoUpdate }: ProvideSearchBar) =>
  provide(SearchBarSymbol, { gridProps, model, autoUpdate })

export const injectSearchBar = () =>
  inject<ProvideSearchBar>(SearchBarSymbol, {
    gridProps: computed(() => ({})),
    model: ref({}),
    autoUpdate: ref(false),
  })
