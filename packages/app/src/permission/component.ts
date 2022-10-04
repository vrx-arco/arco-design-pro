import { computed, defineComponent, toRaw } from 'vue'
import { useVrxArcoCheckPermission } from './app-context'
import { usePermissionStore } from '../pinia'
import { storeToRefs } from 'pinia'
import { any, bool } from 'vue-types'

export const Permission = defineComponent({
  name: 'vrx-arco-permission',
  props: {
    data: any(),
    destroyOnNoPermission: bool().def(true),
  },
  setup: (props, { slots }) => {
    const checkPermission = useVrxArcoCheckPermission()
    const { permission } = storeToRefs(usePermissionStore())
    const hasPermission = computed(() => checkPermission(toRaw(permission.value), props.data))

    return () => {
      const { destroyOnNoPermission } = props
      if (!hasPermission.value && destroyOnNoPermission) {
        return slots.noPermission?.()
      }
      return slots.default?.({ hasPermission: hasPermission.value })
    }
  },
})
