import { PropType, defineComponent } from 'vue'
import { Layout, Tabs } from '@arco-design/web-vue'
import { injectSearchLayout } from './context'
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
    useTabs: Boolean,

    /**
     * tab配置
     */
    tabs: {
      type: Array as PropType<SearchLayoutContentTab[]>,
      default: () => [],
    },
    /**
     * tab类型
     * @default rounded
     */
    tabsType: {
      type: String as PropType<TabsType>,
      default: 'rounded',
    },
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
              v-slots={{ extra: slots.tabExtra }}
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
