import { defineComponent } from 'vue'
import { IconMoonFill, IconSunFill } from '@arco-design/web-vue/es/icon'
import { Button } from '@arco-design/web-vue'
import { useDark, useToggle } from '@vueuse/core'

/**
 * 亮色暗色切换按钮
 */
export const ThemeDarkLight = defineComponent({
  name: 'vrx-arco-theme-dark-light',
  emits: {
    // @ts-ignore
    change: (dark: boolean) => null,
  },
  setup: (_, { emit }) => {
    const isDark = useDark({
      selector: 'body',
      attribute: 'arco-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'arco-theme',
      onChanged(dark) {
        emit('change', dark)
      },
    })
    const toggleDark = useToggle(isDark)

    return () => (
      <Button onClick={() => toggleDark()} shape="circle">
        {isDark.value ? <IconMoonFill /> : <IconSunFill />}
      </Button>
    )
  },
})
