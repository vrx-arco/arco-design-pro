import { computed, defineComponent, toRaw } from 'vue'
import { useVrxArcoCheckPermission } from './app-context'
import { usePermissionStore } from '../pinia'
import { storeToRefs } from 'pinia'
import { any, bool } from 'vue-types'
import { useEmptyComponentInject, filterEmptyChildren } from '@vrx-arco/use'

export const Permission = defineComponent({
  name: 'vrx-arco-permission',
  props: {
    data: any(),
    destroyOnNoPermission: bool().def(true),
  },
  setup: (props, { slots }) => {
    const checkPermission = useVrxArcoCheckPermission()
    const { permission } = storeToRefs(usePermissionStore())
    const { empty } = useEmptyComponentInject()
    const hasPermission = computed(() => checkPermission(toRaw(permission.value), props.data))

    return () => {
      empty.value = false
      const { destroyOnNoPermission } = props
      if (!hasPermission.value && destroyOnNoPermission) {
        const noPermission = filterEmptyChildren(slots.noPermission?.())
        empty.value = !noPermission.length
        return noPermission
      }

      return slots.default?.({ hasPermission: hasPermission.value })
    }
  },
})
