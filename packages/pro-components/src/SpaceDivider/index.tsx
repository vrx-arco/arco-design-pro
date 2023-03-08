import { computed, defineComponent } from 'vue'
import { filterEmptyChildren, useEmptyComponentProvide } from '@vrx-arco/use'
import { bool, number, oneOf, oneOfType, string } from 'vue-types'
import { Divider } from '@arco-design/web-vue'
import { style } from './style'

const SpaceDividerItem = defineComponent({
  name: 'vrx-arco-space-divider-item',
  props: {
    direction: oneOf(['vertical', 'horizontal'] as const).def('horizontal'),
    size: number(),
    gap: oneOfType([number(), string()]),
    type: oneOf(['dashed', 'dotted', 'double', 'solid'] as const),
    divider: bool().def(true),
  },
  setup: (props, { slots }) => {
    const { empty } = useEmptyComponentProvide()
    return () => {
      if (empty.value) {
        return
      }
      return (
        <>
          {props.divider && (
            <Divider
              direction={props.direction === 'horizontal' ? 'vertical' : 'horizontal'}
              size={props.size}
              margin={props.gap}
              type={props.type}
            />
          )}
          {slots.default?.()}
        </>
      )
    }
  },
})
export const SpaceDivider = defineComponent({
  name: 'vrx-arco-space-divider',
  props: {
    /**
     * 布局方向
     */
    direction: oneOf(['vertical', 'horizontal'] as const).def('horizontal'),
    /**
     * 对齐方向
     */
    align: oneOf(['start', 'end', 'center', 'baseline'] as const).def('center'),
    /**
     * 是否占满
     */
    fill: bool().def(false),
    wrap: bool().def(false),
    /**
     * 分割线宽度
     */
    size: number(),
    /**
     * 分割线间距
     */
    gap: oneOfType([number(), string()]),
    type: oneOf(['dashed', 'dotted', 'double', 'solid'] as const),
  },
  setup: (props, { slots }) => {
    const { bemClass } = style()
    const classname = computed(() => ({
      [bemClass(props.fill ? '-fill' : undefined)]: true,
      [bemClass(`-align-${props.align}`)]: true,
      [bemClass('-wrap')]: props.wrap,
      [bemClass(`-${props.direction}`)]: true,
    }))

    return () => {
      const children = filterEmptyChildren(slots.default?.())

      return (
        <div class={classname.value}>
          {children.map((item, index) => (
            <SpaceDividerItem
              direction={props.direction}
              size={props.size}
              gap={props.gap}
              type={props.type}
              divider={index > 0}
              key={index}
            >
              {item}
            </SpaceDividerItem>
          ))}
        </div>
      )
    }
  },
})
