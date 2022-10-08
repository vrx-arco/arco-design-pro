import { inject, provide, ref } from 'vue'

const EmptyComponentContext = Symbol('EmptyComponent')

export const useEmptyComponentProvide = () => {
  const empty = ref(false)

  provide(EmptyComponentContext, { empty })

  return {
    empty,
  }
}

export const useEmptyComponentInject = () => inject(EmptyComponentContext, { empty: ref(false) })
