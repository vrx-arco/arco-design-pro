import { defineComponent } from 'vue'
import { Card, Divider, Layout } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'

export const SearchLayoutHeader = defineComponent({
  name: 'vrx-arco-search-layout-header',
  setup: (_, { slots }) => {
    const { bemClass, type, title } = injectSearchLayout()
    return () => {
      return (
        <Layout.Header
          class={{
            [bemClass('__header')]: true,
            [bemClass('__header--card')]: type.value === 'card',
          }}
        >
          <Card bordered={false} title={title.value} class={bemClass('-card')}>
            {slots.default?.()}
          </Card>
          {type.value === 'card' && (
            <div class={bemClass('__header-divider')}>
              <Divider />
            </div>
          )}
        </Layout.Header>
      )
    }
  },
})
