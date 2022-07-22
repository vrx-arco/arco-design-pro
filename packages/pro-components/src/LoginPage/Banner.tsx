import { defineComponent } from 'vue'
import { bannerStyle } from './style'
export const LoginBanner = defineComponent({
  name: 'vrx-arco-login-banner',
  setup: () => {
    bannerStyle()
    return () => <div class={''}>ss</div>
  },
})
