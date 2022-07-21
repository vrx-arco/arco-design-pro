import { defineComponent } from 'vue'
import { style } from './style'
import { Breadcrumb, Layout } from '@arco-design/web-vue'
import { IconApps } from '@arco-design/web-vue/es/icon'
import { useRoute, useRouter } from 'vue-router'

export const PageWrapper = defineComponent({
  name: 'vrx-arco-page-wrapper',
  setup: (_, { slots }) => {
    style()
    const route = useRoute()
    const router = useRouter()

    const handleRoute = (name: string) => {
      router.replace({ name })
    }

    return () => (
      <Layout class="vrx-arco-page-wrapper">
        <Layout.Header class="vrx-arco-page-wrapper__header">
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
                  class="vrx-arco-page-wrapper__breadcrumb-item"
                  key={item.name as string}
                  {...{ onClick: () => handleRoute(item.name as string) }}
                >
                  {item.meta.title}
                </Breadcrumb.Item>
              )
            })}
          </Breadcrumb>
        </Layout.Header>
        <Layout.Content>{slots.default?.()}</Layout.Content>
      </Layout>
    )
  },
})
