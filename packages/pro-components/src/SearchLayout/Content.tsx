import { defineComponent } from 'vue'
import { Layout, Tabs } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'
import { array, bool, string } from 'vue-types'
import type { TabsType } from '@arco-design/web-vue/es/tabs/interface'

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
    /**
     * tab类型
     * @default rounded
     */
    tabsType: string<TabsType>().def('rounded'),
  },
  emits: {
    /**
     *
     * @param key
     */
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabChange: (key: string | number) => true,
  },
  setup: (props, { slots, emit }) => {
    const { bemClass } = injectSearchLayout()

    return () => {
      const { useTabs, tabs, tabsType } = props
      return (
        <Layout.Content class={bemClass('__content')}>
          {useTabs ? (
            <Tabs
              type={tabsType}
              lazyLoad
              destroyOnHide
              justify
              animation
              class={bemClass('__content--nav')}
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
