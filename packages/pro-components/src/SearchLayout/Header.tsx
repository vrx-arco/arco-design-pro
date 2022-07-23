import { defineComponent } from 'vue'
import { Card, Layout, Divider } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'
import '@arco-design/web-vue/es/divider/style'
export const SearchLayoutHeader = defineComponent({
  name: 'vrx-arco-search-layout-header',
  setup: (_, { slots }) => {
    const { bemClass, type, title } = injectSearchLayout()
    return () => {
      return (
        <Layout.Header
          class={{ [bemClass('__header')]: true, [bemClass('__header--card')]: type === 'card' }}
        >
          <Card bordered={false} title={title} class={bemClass('-card')}>
            {slots.default?.()}
          </Card>
          {type === 'card' && (
            <div class={bemClass('__header-divider')}>
              <Divider />
            </div>
          )}
        </Layout.Header>
      )
    }
  },
})
