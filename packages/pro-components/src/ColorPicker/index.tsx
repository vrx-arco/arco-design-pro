import { controlVModel } from '@vrx-arco/use'
import { PropType, defineComponent } from 'vue'
import { ColorFormats } from '@ctrl/tinycolor'
import { ColorPalette } from '../ColorPalette'
import { ColorPickerTrigger } from './Trigger'

/**
 * 颜色选择器
 */
export const ColorPicker = defineComponent({
  name: 'vrx-arco-color-picker',
  props: {
    /**
     * 颜色
     * @default #000000
     */
    color: String,
    /**
     * 颜色格式化形式
     * @default rgb
     */
    valueFormat: {
      type: String as PropType<ColorFormats>,
      default: 'rgb',
    },
  },
  emits: ['update:color'],
  setup: (props, { emit }) => {
    const color = controlVModel(props, 'color', emit, () => '#000000')
    return () => {
      return (
        <ColorPickerTrigger color={color.value}>
          <ColorPalette v-model:color={color.value} valueFormat={props.valueFormat} />
        </ColorPickerTrigger>
      )
    }
  },
})
