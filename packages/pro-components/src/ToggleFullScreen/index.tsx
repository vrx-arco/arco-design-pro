import { defineComponent } from 'vue'
import { Button } from '@arco-design/web-vue'
import { useFullscreen } from '@vueuse/core'
import IconFullscreen from '@vrx-arco/icons-vue/IconFullscreen'
import IconFullscreenExit from '@vrx-arco/icons-vue/IconFullscreenExit'

export const ToggleFullScreen = defineComponent({
  name: 'vrx-arco-toggle-full-screen',
  setup: () => {
    const { isSupported, isFullscreen, toggle } = useFullscreen()
    return () => (
      <Button shape="circle" disabled={!isSupported} onClick={() => toggle()}>
        {isFullscreen.value ? (
          <IconFullscreenExit class="arco-icon" />
        ) : (
          <IconFullscreen class="arco-icon" />
        )}
      </Button>
    )
  },
})
