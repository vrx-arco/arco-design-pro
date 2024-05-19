import { defineComponent } from 'vue'
import { Breadcrumb, BreadcrumbItem, Scrollbar } from '@arco-design/web-vue'
import { IconApps } from '@vrx-arco/icon'
import { useRoute, useRouter } from 'vue-router'
import { style } from '../style/var'

/**
 * 页面包裹
 */
export const PageWrapper = defineComponent({
  name: 'vrx-arco-page-wrapper',
  props: {
    scrollbar: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props, { slots }) => {
    const { bemClass } = style('page-wrapper')
    const route = useRoute()
    const router = useRouter()

    const handleRoute = (name: string) => {
      router.replace({ name })
    }

    const renderContent = () => {
      if (props.scrollbar) {
        return (
          <main class={bemClass('__content--scrollbar')}>
            <Scrollbar outerClass={bemClass('__scrollbar--out')} class={bemClass('__scrollbar')}>
              {slots.default?.()}
            </Scrollbar>
          </main>
        )
      }
      return <main class={bemClass('__content')}>{slots.default?.()}</main>
    }

    return () => (
      <section class={bemClass()}>
        <header class={bemClass('__header')}>
          <Breadcrumb>
            <BreadcrumbItem>
              <IconApps />
            </BreadcrumbItem>
            {route.matched.map((item) => {
              if (!item.meta?.title) {
                return <></>
              }
              return (
                <BreadcrumbItem
                  class={bemClass('__breadcrumb-item')}
                  key={item.name as string}
                  {...{ onClick: () => handleRoute(item.name as string) }}
                >
                  {item.meta.title}
                </BreadcrumbItem>
              )
            })}
          </Breadcrumb>
        </header>
        {renderContent()}
      </section>
    )
  },
})
