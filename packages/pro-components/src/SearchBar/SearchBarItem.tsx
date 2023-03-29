import { FormGridItem } from '../FormGrid'
import { defineComponent } from 'vue'
import { formGridItemProps } from '../FormGrid/props'
import { injectSearchBar } from './context'

export const SearchBarItem = defineComponent({
  name: 'vrx-arco-search-bar-item',
  props: {
    ...formGridItemProps(),
    gridProps: Object,
    /**
     * 对 `search-bar` autoUpdate 属性进行覆盖,或指定 v-model:arg arg的值
     */
    autoUpdate: [Boolean, String],
  },
  setup: (props, { slots }) => {
    const { gridProps, model, autoUpdate: pAutoUpdate } = injectSearchBar()

    return () => {
      const { autoUpdate, ...otherProps } = props
      const renderDefaultSlot = () => {
        const defaultSlot = slots.default?.()
        const { field } = props
        // 自动劫持默认插槽 模拟 `v-model:modelKey`
        const isAutoUpdate = autoUpdate || pAutoUpdate.value
        const firstDefaultSlotProps = defaultSlot?.[0]
        if (!firstDefaultSlotProps) {
          return defaultSlot
        }
        if (isAutoUpdate && field) {
          firstDefaultSlotProps.props ||= {}
          // @ts-ignore
          firstDefaultSlotProps.dynamicProps ||= []
          const modelKey: string = autoUpdate === true || !autoUpdate ? 'modelValue' : autoUpdate
          // @ts-ignore
          firstDefaultSlotProps.dynamicProps.push(modelKey)
          // PatchFlags.PROPS
          firstDefaultSlotProps.patchFlag = 1 << 3
          firstDefaultSlotProps.props[modelKey] = model.value[field]
          firstDefaultSlotProps.props[`onUpdate:${modelKey}`] = (value) => {
            model.value[field] = value
          }
        }
        return defaultSlot
      }
      return (
        <FormGridItem
          {...otherProps}
          gridProps={otherProps.gridProps || gridProps.value}
          v-slots={{ label: slots.label, help: slots.help, extra: slots.extra }}
        >
          {renderDefaultSlot()}
        </FormGridItem>
      )
    }
  },
})
