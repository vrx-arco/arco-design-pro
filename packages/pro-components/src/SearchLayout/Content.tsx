import { defineComponent } from 'vue'
import { Layout } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'

export const SearchLayoutContent = defineComponent({
  name: 'vrx-arco-search-layout-content',
  setup: (_, { slots }) => {
    const { bemClass } = injectSearchLayout()

    return () => <Layout.Content class={bemClass('__content')}>{slots.default?.()}</Layout.Content>
  },
})
