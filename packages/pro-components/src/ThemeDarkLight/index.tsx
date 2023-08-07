import { Button } from '@arco-design/web-vue'
import { IconDesktop, IconMoonFill, IconSunFill } from '@vrx-arco/icon'
import { useColorMode } from '@vueuse/core'
import { defineComponent } from 'vue'

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
          auto: () => <IconDesktop />,
          light: () => <IconSunFill />,
          dark: () => <IconMoonFill />,
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
