import { defineComponent } from 'vue'
import { style } from './style'
import { Breadcrumb, Layout } from '@arco-design/web-vue'
import { IconApps } from '@vrx-arco/icon'
import { useRoute, useRouter } from 'vue-router'

/**
 * 页面包裹
 */
export const PageWrapper = defineComponent({
  name: 'vrx-arco-page-wrapper',
  setup: (_, { slots }) => {
    const { bemClass } = style()
    const route = useRoute()
    const router = useRouter()

    const handleRoute = (name: string) => {
      router.replace({ name })
    }

    return () => (
      <Layout class={bemClass()}>
        <Layout.Header class={bemClass('__header')}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <IconApps />
            </Breadcrumb.Item>
            {route.matched.map((item) => {
              if (!item.meta?.title) {
                return <></>
              }
              return (
                <Breadcrumb.Item
                  class={bemClass('__breadcrumb-item')}
                  key={item.name as string}
                  {...{ onClick: () => handleRoute(item.name as string) }}
                >
                  {item.meta.title}
                </Breadcrumb.Item>
              )
            })}
          </Breadcrumb>
        </Layout.Header>
        <Layout.Content class={bemClass('__content')}>{slots.default?.()}</Layout.Content>
      </Layout>
    )
  },
})
