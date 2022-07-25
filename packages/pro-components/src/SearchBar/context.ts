import { computed, ComputedRef, inject, provide } from 'vue'

const SearchBarSymbol = Symbol('SearchBar')

export const provideSearchBar = ({ gridProps }: { gridProps: ComputedRef<Record<string, any>> }) =>
  provide(SearchBarSymbol, { gridProps })

export const injectSearchBar = () => inject(SearchBarSymbol, { gridProps: computed(() => ({})) })
