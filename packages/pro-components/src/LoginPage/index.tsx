import { defineComponent } from 'vue'
import { loginPageStyle } from './style'
export const LoginPage = defineComponent({
  name: 'vrx-arco-login-page',
  setup: () => {
    loginPageStyle()
    return () => <div class="vrx-arco-login-page"></div>
  },
})
