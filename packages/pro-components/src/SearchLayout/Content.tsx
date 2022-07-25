import { defineComponent } from 'vue'
import { Layout, Tabs } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'
import { array, bool } from 'vue-types'

export interface SearchLayoutContentTab {
  title: string
  disabled: boolean
  key: string | number
}

export const SearchLayoutContent = defineComponent({
  name: 'vrx-arco-search-layout-content',
  props: {
    /**
     * 是否启用tab
     */
    useTabs: bool(),

    /**
     * tab配置
     */
    tabs: array<SearchLayoutContentTab>().def([]),
  },
  emits: {
    /**
     *
     * @param key
     */
    // @ts-ignore
    tabChange: (key: string | number) => true,
  },
  setup: (props, { slots, emit }) => {
    const { bemClass } = injectSearchLayout()

    return () => {
      const { useTabs, tabs } = props
      return (
        <Layout.Content class={bemClass('__content')}>
          {useTabs ? (
            <Tabs
              type="rounded"
              lazyLoad
              destroyOnHide
              justify
              animation
              onChange={(key) => emit('tabChange', key)}
            >
              {tabs.map((item) => (
                <Tabs.TabPane key={item.key} title={item.title} disabled={item.disabled}>
                  {slots.default?.()}
                </Tabs.TabPane>
              ))}
            </Tabs>
          ) : (
            slots.default?.()
          )}
        </Layout.Content>
      )
    }
  },
})
