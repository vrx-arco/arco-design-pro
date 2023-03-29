import { PropType, computed, defineComponent } from 'vue'
import { filterEmptyChildren, useEmptyComponentProvide } from '@vrx-arco/use'
import { Divider } from '@arco-design/web-vue'
import { style } from './style'

const SpaceDividerItem = defineComponent({
  name: 'vrx-arco-space-divider-item',
  props: {
    direction: { type: String as PropType<'vertical' | 'horizontal'>, default: 'horizontal' },
    size: Number,
    gap: [Number, String],
    type: String as PropType<'dashed' | 'dotted' | 'double' | 'solid'>,
    divider: {
      type: Boolean,
      default: true,
    },
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
    direction: { type: String as PropType<'vertical' | 'horizontal'>, default: 'horizontal' },
    /**
     * 对齐方向
     */
    align: { type: String as PropType<'start' | 'end' | 'center' | 'baseline'>, default: 'center' },
    /**
     * 是否占满
     */
    fill: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    /**
     * 分割线宽度
     */
    size: Number,
    /**
     * 分割线间距
     */
    gap: [Number, String],
    type: String as PropType<'dashed' | 'dotted' | 'double' | 'solid'>,
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
