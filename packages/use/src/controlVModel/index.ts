import { Ref, computed, ref } from 'vue'

export const controlVModel = <
  Props extends Record<string, any>,
  Key extends keyof Props,
  Data extends Props[Key],
>(
  props: Props,
  name: Key,
  emit,
  init: () => Data
) => {
  const value = ref(init()) as Ref<Data>

  return computed({
    get() {
      return props[name] ?? value.value
    },

    set(v) {
      emit(`update:${name as string}`, v)
      value.value = v
    },
  }) as Ref<Data>
}
