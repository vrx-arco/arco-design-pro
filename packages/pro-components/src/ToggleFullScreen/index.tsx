import { defineComponent } from 'vue'
import { Button } from '@arco-design/web-vue'
import { IconFullscreen, IconFullscreenExit } from '@arco-design/web-vue/es/icon'
import { useFullscreen } from '@vueuse/core'

export const ToggleFullScreen = defineComponent({
  name: 'vrx-arco-toggle-full-screen',
  setup: () => {
    const { isSupported, isFullscreen, toggle } = useFullscreen()
    return () => (
      <Button shape="circle" disabled={!isSupported} onClick={() => toggle()}>
        {isFullscreen.value ? <IconFullscreenExit /> : <IconFullscreen />}
      </Button>
    )
  },
})
