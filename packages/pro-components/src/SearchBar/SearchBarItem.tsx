import { FormGridItem } from '../FormGrid'
import { defineComponent } from 'vue'
import { formGridItemProps } from '../FormGrid/props'
import { injectSearchBar } from './context'
import { bool, object, oneOfType, string } from 'vue-types'

export const SearchBarItem = defineComponent({
  name: 'vrx-arco-search-bar-item',
  props: {
    ...formGridItemProps(),
    gridProps: object(),
    autoUpdate: oneOfType([bool(), string()]),
  },
  setup: (props, { slots }) => {
    const { gridProps, model, autoUpdate: pAutoUpdate } = injectSearchBar()

    const renderDefaultSlot = () => {
      const defaultSlot = slots.default?.()
      const { autoUpdate, field } = props
      // 自动劫持默认插槽 模拟 `v-model:modelKey`
      const isAutoUpdate = autoUpdate || pAutoUpdate.value
      const firstDefaultSlotProps = defaultSlot?.[0]
      if (!firstDefaultSlotProps) {
        return defaultSlot
      }
      firstDefaultSlotProps.props ||= {}
      if (isAutoUpdate && field) {
        const modelKey: string = autoUpdate === true || !autoUpdate ? 'modelValue' : autoUpdate
        firstDefaultSlotProps.props[modelKey] = model.value[field]
        firstDefaultSlotProps.props[`onUpdate:${modelKey}`] = (value) => {
          model.value[field] = value
        }
      }
      return defaultSlot
    }

    return () => (
      <FormGridItem
        {...props}
        gridProps={props.gridProps || gridProps.value}
        v-slots={{ label: slots.label, help: slots.help, extra: slots.extra }}
      >
        {renderDefaultSlot()}
      </FormGridItem>
    )
  },
})
