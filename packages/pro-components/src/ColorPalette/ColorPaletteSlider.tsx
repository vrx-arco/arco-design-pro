import { HSVA, tinycolor } from '@ctrl/tinycolor'
import { useVModel } from '@vueuse/core'
import { PropType, computed, defineComponent, onBeforeUnmount, ref, toRef } from 'vue'
import { style } from '../style/var'
import { ColorPaletteBlock } from './ColorBlock'

/**
 * 饱和度调整
 */
const ColorPaletteSaturation = defineComponent({
  name: 'VrxArcoColorPaletteSaturation',
  props: {
    s: {
      type: [Number, String],
      default: 0,
    },
    v: {
      type: [Number, String],
      default: 0,
    },
    /**
     * 滑条指示器颜色
     */
    color: String,
    /**
     * 饱和度-背景色
     */
    palette: String,
  },
  emits: ['change'],
  setup: (props, { emit }) => {
    const { bemClass } = style('color-palette')
    const s = toRef(props, 's')
    const v = toRef(props, 'v')

    const containerRef = ref<HTMLDivElement>()

    const dotRef = ref<HTMLDivElement>()

    const isDraggle = ref(false)

    const draggle = (x: number, y: number) => {
      const s = (x / containerRef.value!.offsetWidth) * 100
      const v = ((containerRef.value!.offsetHeight - y) / containerRef.value!.offsetHeight) * 100
      emit('change', { s, v })
    }

    const handleClick = (e: MouseEvent) => {
      draggle(e.offsetX, e.offsetY)
    }

    const handleMousemove = (e: MouseEvent) => {
      e.stopPropagation()
      if (!isDraggle.value) {
        return
      }
      const rect = containerRef.value!.getBoundingClientRect()

      const x = Math.min(e.clientX - rect.left, containerRef.value!.offsetWidth)
      const y = Math.min(e.clientY - rect.top, containerRef.value!.offsetHeight)
      draggle(Math.max(x, 0), Math.max(y, 0))
    }

    const handleMouseup = () => {
      isDraggle.value = false
      window.removeEventListener('mousemove', handleMousemove)
      window.removeEventListener('mouseup', handleMouseup)
    }

    const handleMovestart = () => {
      isDraggle.value = true
      window.addEventListener('mousemove', handleMousemove)
      window.addEventListener('mouseup', handleMouseup)
    }

    onBeforeUnmount(() => {
      handleMouseup()
    })

    return () => (
      <div ref={containerRef} class={bemClass('-saturation-container')} onClick={handleClick}>
        <div
          ref={dotRef}
          class={bemClass('-saturation-dot')}
          style={{
            left: s.value + '%',
            top: 100 - (v.value as number) + '%',
            backgroundColor: props.color,
          }}
          onMousedown={handleMovestart}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
        <div class={bemClass('-saturation')} style={{ backgroundColor: props.palette }} />
      </div>
    )
  },
})

/**
 * 颜色选择器-滑动输入条
 */
const ColorPaletteSliderSlider = defineComponent({
  name: 'VrxArcoColorPaletteSliderSlider',
  props: {
    /**
     * 滚动百分比
     */
    modelValue: {
      type: Number,
      default: 0,
    },
    /**
     * 滑条指示器颜色
     */
    color: String,
  },
  emits: ['update:modelValue', 'change'],
  setup: (props, { emit }) => {
    const { bemClass } = style('color-palette')
    const value = useVModel(props, 'modelValue', emit)

    const containerRef = ref<HTMLDivElement>()

    const dotRef = ref<HTMLDivElement>()

    const isDraggle = ref(false)

    const handleClick = (e: MouseEvent) => {
      value.value = (e.offsetX / containerRef.value!.offsetWidth) * 100
      emit('change', value.value)
    }

    const handleMousemove = (e: MouseEvent) => {
      e.stopPropagation()
      if (!isDraggle.value) {
        return
      }

      const x = Math.min(
        e.clientX - containerRef.value!.getBoundingClientRect().left,
        containerRef.value!.offsetWidth
      )
      value.value = (Math.max(x, 0) / containerRef.value!.offsetWidth) * 100
      emit('change', value.value)
    }

    const handleMouseup = () => {
      isDraggle.value = false
      window.removeEventListener('mousemove', handleMousemove)
      window.removeEventListener('mouseup', handleMouseup)
    }

    const handleMovestart = () => {
      isDraggle.value = true
      window.addEventListener('mousemove', handleMousemove)
      window.addEventListener('mouseup', handleMouseup)
    }

    onBeforeUnmount(() => {
      handleMouseup()
    })

    return () => (
      <div ref={containerRef} class={bemClass('-slider')} onClick={handleClick}>
        <div
          ref={dotRef}
          class={bemClass('-slider-dot')}
          onMousedown={handleMovestart}
          role="slider"
          style={{ left: value.value + '%', backgroundColor: props.color }}
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      </div>
    )
  },
})

export const ColorPaletteSlider = defineComponent({
  name: 'VrxArcoColorPaletteSlider',
  props: {
    color: {
      type: Object as PropType<HSVA>,
      required: true,
    },
  },
  emits: ['change'],
  setup: (props, { emit }) => {
    const { bemClass } = style('color-palette')
    const rgbString = computed(() => {
      const color = tinycolor(props.color).toRgb()
      return `${color.r},${color.g},${color.b}`
    })

    const hsv = toRef(props, 'color')

    const paletteBg = computed(() => {
      const color = hsv.value
      return tinycolor({ h: color.h, s: 100, v: 100 }).toRgbString()
    })

    const h = computed({
      get: () => {
        return (+hsv.value.h / 360) * 100
      },
      set: (h: number) => {
        emit('change', { ...hsv.value, h: (h / 100) * 360 })
      },
    })

    const a = computed({
      get: () => {
        return hsv.value.a * 100
      },
      set: (a) => {
        emit('change', { ...hsv.value, a: a / 100 })
      },
    })

    const handleChange = (v: Partial<HSVA>) => {
      emit('change', { ...hsv.value, ...v })
    }

    return () => (
      <>
        <ColorPaletteSaturation
          s={hsv.value.s}
          v={hsv.value.v}
          color={rgbString.value}
          palette={paletteBg.value}
          onChange={handleChange}
        />
        <div class={bemClass('-slider-container')}>
          <div class={bemClass('-slider-group')}>
            <ColorPaletteSliderSlider
              class={bemClass('-gradient')}
              color={paletteBg.value}
              v-model={h.value}
            />
            <div class={bemClass('-slider-alpha')}>
              <ColorPaletteSliderSlider
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(${rgbString.value}, 0), rgb(${rgbString.value}))`,
                }}
                color={`rgba(${rgbString.value}, ${hsv.value.a})`}
                v-model={a.value}
              />
            </div>
          </div>
          <ColorPaletteBlock color={hsv.value} style={{ width: '24px' }} />
        </div>
      </>
    )
  },
})
