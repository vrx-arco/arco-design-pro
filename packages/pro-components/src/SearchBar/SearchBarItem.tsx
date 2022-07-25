import { FormGridItem } from '../FormGrid'
import { defineComponent } from 'vue'
import { formGridItemProps } from '../FormGrid/props'
import { injectSearchBar } from './context'
import { object } from 'vue-types'

export const SearchBarItem = defineComponent({
  name: 'vrx-arco-search-bar-item',
  props: {
    ...formGridItemProps(),
    gridProps: object(),
  },
  setup: (props, { slots }) => {
    const { gridProps } = injectSearchBar()
    return () => (
      <FormGridItem {...props} gridProps={props.gridProps || gridProps.value} v-slots={slots} />
    )
  },
})
