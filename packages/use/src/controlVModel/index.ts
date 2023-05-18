import { useVModel } from '@vueuse/core'
import { Ref, ref } from 'vue'

export const controlVModel = <
  Props extends Record<string, any>,
  Key extends keyof Props,
  Data extends Props[Key]
>(
  props: Props,
  name: Key,
  emit,
  init: () => Data
) => {
  if (props[name]) {
    return useVModel(props, name, emit) as any as Ref<Data>
  }
  return ref(init()) as Ref<Data>
}
