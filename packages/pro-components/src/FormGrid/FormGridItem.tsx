import { defineComponent } from 'vue'
import { Col, FormItem } from '@arco-design/web-vue'
import { formGridItemProps } from './props'

export const FormGridItem = defineComponent({
  name: 'vrx-arco-form-grid-item',
  props: formGridItemProps(),
  setup: (props, { slots }) => {
    const getFormItemProps = () => {
      const o = { ...props }
      delete o.gridProps
      return o
    }
    return () => {
      const { gridProps } = props

      return (
        <Col {...gridProps}>
          <FormItem
            {...getFormItemProps()}
            v-slots={{ label: slots.label, help: slots.help, extra: slots.extra }}
          >
            {slots.default?.()}
          </FormItem>
        </Col>
      )
    }
  },
})
