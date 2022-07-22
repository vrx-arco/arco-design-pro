import { defineComponent } from 'vue'
import { Drawer, Layout, Spin } from '@arco-design/web-vue'
import { NavBar } from '../NavBar'
import { ProMenu } from '../Menu'
import { useShareBreakpoints } from '@vrx-arco/use'
import { style } from './styles'
import { array, bool, string } from 'vue-types'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { useToggle } from '@vueuse/core'

export const ProLayout = defineComponent({
  name: 'vrx-arco-pro-layout',
  props: {
    menus: array<RouteRecordRaw>().def([]),
    title: string(),
    logo: string(),
    loading: bool().def(false),
  },
  setup: (props, { slots }) => {
    const { bemClass } = style()
    const breakpoints = useShareBreakpoints()

    const isSmallerLg = breakpoints.smaller('lg')

    const [menuModelVisible, setMenuModelVisible] = useToggle(false)

    return () => {
      const { title, logo, menus, loading } = props
      return (
        <Spin loading={loading} class={bemClass('__spin')} size={30}>
          <Layout class={bemClass()}>
            <Layout.Header class={bemClass('__header')}>
              <NavBar
                title={title}
                logo={logo}
                v-slots={{
                  logo: slots.logo,
                  title: slots.title,
                  logoContainer: slots.logoContainer,
                }}
                onMenuClick={() => {
                  setMenuModelVisible(true)
                }}
              >
                {slots.headerToolbox?.()}
              </NavBar>
            </Layout.Header>
            <Layout.Content class={bemClass('__wrap-container')}>
              <Layout class={bemClass('__wrap')}>
                {isSmallerLg.value || (
                  <Layout.Sider breakpoint="xl" collapsible>
                    <ProMenu menu={menus} />
                  </Layout.Sider>
                )}
                {isSmallerLg.value && (
                  <Drawer
                    placement="left"
                    v-model:visible={menuModelVisible.value}
                    footer={false}
                    header={false}
                    maskClosable
                    closable={false}
                  >
                    <ProMenu menu={menus} />
                  </Drawer>
                )}
                <Layout.Content class={bemClass('__content')}>
                  {slots.default?.() || <RouterView />}
                </Layout.Content>
              </Layout>
            </Layout.Content>
          </Layout>
        </Spin>
      )
    }
  },
})
