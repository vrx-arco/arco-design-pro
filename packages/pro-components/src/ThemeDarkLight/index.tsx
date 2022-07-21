import { defineComponent } from 'vue'
import { IconMoonFill, IconSunFill } from '@arco-design/web-vue/es/icon'
import { Button } from '@arco-design/web-vue'
import { useDark, useToggle } from '@vueuse/core'
import '@arco-design/web-vue/es/button/style'

/**
 * 亮色暗色切换按钮
 */
export const ThemeDarkLight = defineComponent({
  name: 'vrx-arco-theme-dark-light',
  setup: () => {
    const isDark = useDark({
      selector: 'body',
      attribute: 'arco-theme',
      valueDark: 'dark',
      valueLight: 'light',
      storageKey: 'arco-theme',
    })
    const toggleDark = useToggle(isDark)

    return () => (
      <Button onClick={() => toggleDark()} shape="circle">
        {isDark.value ? <IconMoonFill /> : <IconSunFill />}
      </Button>
    )
  },
})
