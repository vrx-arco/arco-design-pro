import { ColorFormats, HSVA, tinycolor } from '@ctrl/tinycolor'
import { controlVModel } from '@vrx-arco/use'
import { PropType, defineComponent, ref, watch } from 'vue'
import { style } from '../style/var'
import { ColorPaletteSlider } from './ColorPaletteSlider'

export const ColorPalette = defineComponent({
  name: 'VrxArcoColorPalette',
  props: {
    /**
     * 颜色
     * @default #000000
     */
    color: [String, Number],
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
    const { bemClass } = style('color-palette')
    const color = controlVModel(props, 'color', emit, () => '#000000')
    const hsv = ref<HSVA>({ h: 0, s: 100, v: 100, a: 1 })

    watch(
      color,
      (color) => {
        const _hsv = tinycolor(color).toHsv()
        if (_hsv.h === 0 && hsv.value.h === 360) {
          _hsv.h = 360
        }
        hsv.value = {
          ..._hsv,
          s: _hsv.s * 100,
          v: _hsv.v * 100,
        } as HSVA
      },
      { immediate: true }
    )

    const handleSliderChange = (v: HSVA) => {
      hsv.value = v
      color.value = tinycolor(v).toString(props.valueFormat)
    }
    return () => (
      <div class={bemClass()}>
        <ColorPaletteSlider color={hsv.value} onChange={handleSliderChange} />
      </div>
    )
  },
})
