import { PropType, computed, defineComponent } from 'vue'
import { ColorInput, TinyColor } from '@ctrl/tinycolor'
import { style } from '../style/var'

export const ColorPaletteBlock = defineComponent({
  name: 'VrxArcoColorPaletteBlock',
  props: {
    color: {
      type: [String, Number, Object] as PropType<ColorInput>,
      required: true,
    },
  },
  setup: (props) => {
    const { bemClass } = style('color-palette')
    const color = computed(() => new TinyColor(props.color).toRgbString())
    return () => (
      <div class={bemClass('-color-block')}>
        <div class={bemClass('-color-inner')} style={{ backgroundColor: color.value }} />
      </div>
    )
  },
})
