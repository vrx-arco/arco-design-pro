import { defineComponent, watch } from 'vue'
import { IconMoonFill, IconSunFill } from '@vrx-arco/icon'
import { Button } from '@arco-design/web-vue'
import { useDark, useToggle } from '@vueuse/core'

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
    const isDark = useDark({
      selector: 'body',
      attribute: 'arco-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'arco-theme',
    })
    const toggleDark = useToggle(isDark)

    watch(isDark, (dark) => {
      emit('change', dark)
    })

    return () => (
      <Button onClick={() => toggleDark()} shape="circle">
        {isDark.value ? <IconMoonFill /> : <IconSunFill />}
      </Button>
    )
  },
})
