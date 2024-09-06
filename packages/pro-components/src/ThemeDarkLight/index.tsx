import { Button } from '@arco-design/web-vue'
import { useColorMode } from '@vueuse/core'
import { defineComponent } from 'vue'
import IconDesktop from '@vrx-arco/icons-vue/IconDesktop'
import IconMoonFill from '@vrx-arco/icons-vue/IconMoonFill'
import IconSunFill from '@vrx-arco/icons-vue/IconSunFill'

/**
 * 亮色暗色切换按钮
 */
export const ThemeDarkLight = defineComponent({
  name: 'vrx-arco-theme-dark-light',
  emits: {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    change: (dark: boolean) => true,
  },
  setup: (_, { emit }) => {
    const mode = useColorMode({
      selector: 'body',
      attribute: 'arco-theme',
      storageKey: 'arco-theme',
      onChanged: (mode, defaultHandler) => {
        defaultHandler(mode)
        emit('change', mode === 'dark')
      },
      modes: {
        dark: 'dark',
        light: 'light',
      },
    })

    const cycleList = (index: number, length: number) => ((index % length) + length) % length

    const toggleDark = () => {
      const list = ['auto', 'light', 'dark']
      const index = list.findIndex((item) => item === mode.store.value)
      // @ts-ignore
      mode.value = list[cycleList(index + 1, list.length)]
    }

    return () => {
      const renderIcon = () => {
        const colorMode = mode.store.value
        const config = {
          auto: () => <IconDesktop class="arco-icon" />,
          light: () => <IconSunFill class="arco-icon" />,
          dark: () => <IconMoonFill class="arco-icon" />,
        }
        return config[colorMode]()
      }
      return (
        <Button onClick={() => toggleDark()} shape="circle">
          {renderIcon()}
        </Button>
      )
    }
  },
})
