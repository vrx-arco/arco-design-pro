import { defineComponent } from 'vue'
import { Col, FormItem } from '@arco-design/web-vue'
import { formGridItemProps } from './props'

export const FormGridItem = defineComponent({
  name: 'vrx-arco-form-grid-item',
  props: formGridItemProps(),
  setup: (props, { slots }) => {
    return () => {
      const { label, gridProps } = props
      return (
        <Col {...gridProps}>
          <FormItem
            label={label}
            v-slots={{ label: slots.label, help: slots.help, extra: slots.extra }}
          >
            {slots.default?.()}
          </FormItem>
        </Col>
      )
    }
  },
})
