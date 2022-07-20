import { defineComponent } from 'vue'
import { ProLayout } from '@vrx-arco/pro-layout'
import { moduleRoute } from '../router/modules'
export const Layout = defineComponent({
  setup: () => {
    return () => <ProLayout menus={moduleRoute} />
  },
})
