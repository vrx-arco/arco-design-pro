import { defineComponent } from 'vue'
import { Drawer, Layout, Scrollbar, Spin } from '@arco-design/web-vue'
import { NavBar } from './components/NavBar'
import { ProMenu } from './components/Menu'
import { useShareBreakpoints } from '@vrx-arco/use'
import { style } from './styles'
import { array, bool, string } from 'vue-types'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { useToggle } from '@vueuse/core'

export const ProLayout = defineComponent({
  name: 'vrx-arco-pro-layout',
  props: {
    /**
     * 基于路由信息生成的菜单
     */
    menus: array<RouteRecordRaw>().def([]),
    /**
     * 标题
     */
    title: string(),
    /**
     * logo
     */
    logo: string(),
    /**
     * 布局的全局加载状态
     */
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
                    <Scrollbar outerClass={bemClass('__menu-scrollbar')}>
                      <ProMenu menu={menus} />
                    </Scrollbar>
                  </Layout.Sider>
                )}
                {isSmallerLg.value && (
                  <Drawer
                    class={bemClass('__smaller-menu-drawer')}
                    placement="left"
                    v-model:visible={menuModelVisible.value}
                    footer={false}
                    header={false}
                    maskClosable
                    closable={false}
                  >
                    <Scrollbar outerClass={bemClass('__menu-scrollbar')}>
                      <ProMenu menu={menus} />
                    </Scrollbar>
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
