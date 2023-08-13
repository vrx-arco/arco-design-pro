import { Trigger } from '@arco-design/web-vue'
import { defineComponent, ref } from 'vue'
import { style } from '../style/var'
import { ColorPaletteBlock } from '../ColorPalette/ColorBlock'

/**
 * 颜色选择器触发器
 */
export const ColorPickerTrigger = defineComponent({
  name: 'vrx-arco-color-picker-trigger',
  props: {
    color: {
      type: [String, Number],
      required: true,
    },
  },
  setup: (props, { slots }) => {
    const { bemClass } = style('color-picker')
    const popupVisible = ref(false)
    return () => {
      return (
        <Trigger
          class={bemClass()}
          trigger="click"
          showArrow
          position="bl"
          updateAtScroll
          v-model:popupVisible={popupVisible.value}
          v-slots={{ content: slots.default }}
        >
          <div
            class={[bemClass('-trigger'), { [bemClass('-trigger-active')]: popupVisible.value }]}
          >
            <ColorPaletteBlock color={props.color} />
            <span class={bemClass('-trigger-text')}>{props.color}</span>
          </div>
        </Trigger>
      )
    }
  },
})
