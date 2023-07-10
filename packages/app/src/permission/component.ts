import { PropType, computed, defineComponent, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import { filterEmptyChildren, useEmptyComponentInject } from '@vrx-arco/use'
import { usePermissionStore } from '../pinia'
import { useVrxArcoCheckPermission } from './app-context'

export const Permission = defineComponent({
  name: 'vrx-arco-permission',
  props: {
    data: {} as PropType<any>,
    destroyOnNoPermission: {
      type: Boolean,
      default: true,
    },
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
