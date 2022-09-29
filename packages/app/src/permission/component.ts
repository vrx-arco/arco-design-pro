import { computed, defineComponent, toRaw } from 'vue'
import { useVrxArcoCheckPermission } from './app-context'
import { usePermissionStore } from '../pinia'
import { storeToRefs } from 'pinia'

export const Permission = defineComponent({
  name: 'vrx-arco-permission',
  props: ['data'],
  setup: (props, { slots }) => {
    const checkPermission = useVrxArcoCheckPermission()
    const { permission } = storeToRefs(usePermissionStore())
    const hasPermission = computed(() => checkPermission(toRaw(permission.value), props.data))

    return () => {
      if (!hasPermission.value) {
        return
      }
      return slots.default?.()
    }
  },
})
