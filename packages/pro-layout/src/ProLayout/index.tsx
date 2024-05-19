import { PropType, SlotsType, defineComponent } from 'vue'
import {
  Drawer,
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Scrollbar,
  Spin,
} from '@arco-design/web-vue'
import { useShareBreakpoints } from '@vrx-arco/use'
import { RouteRecordRaw, RouterView } from 'vue-router'
import { useToggle } from '@vueuse/core'
import { style } from '../style/var'
import { ProMenu } from './components/Menu'
import { NavBar } from './components/NavBar'

export const ProLayout = defineComponent({
  name: 'vrx-arco-pro-layout',
  props: {
    /**
     * 基于路由信息生成的菜单
     */
    menus: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: () => [],
    },
    /**
     * 标题
     */
    title: String,
    /**
     * logo
     */
    logo: String,
    /**
     * 布局的全局加载状态
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  slots: Object as SlotsType<{
    /**
     * 自定义menu icon
     * 优先级高于 menus 中的路由元信息配置
     */
    menuIcon: RouteRecordRaw
    /**
     * 自定义logo
     */
    logo(...args: []): any
    /**
     * 自定义标题
     */
    title(...args: []): any
    /**
     * 自定义logo+标题区域
     */
    logoContainer(...args: []): any
    /**
     * 自定义布局头部中间区域
     */
    navContent(...args: []): any
    /**
     * 自定义布局头部右部区域
     */
    headerToolbox(...args: []): any
    /**
     * 布局默认插槽-不使用该插槽时默认使用 RouterView
     */
    default(...args: []): any
  }>,
  setup: (props, { slots }) => {
    const { bemClass } = style('pro-layout')
    const breakpoints = useShareBreakpoints()

    const isSmallerLg = breakpoints.smaller('lg')

    const [menuModelVisible, setMenuModelVisible] = useToggle(false)

    return () => {
      const { title, logo, menus, loading } = props
      return (
        <Spin loading={loading} class={bemClass('__spin')} size={30}>
          <Layout class={bemClass()}>
            <LayoutHeader class={bemClass('__header')}>
              <NavBar
                title={title}
                logo={logo}
                v-slots={{
                  logo: slots.logo,
                  title: slots.title,
                  logoContainer: slots.logoContainer,
                  content: slots.navContent,
                }}
                onMenuClick={() => {
                  setMenuModelVisible(true)
                }}
              >
                {slots.headerToolbox?.()}
              </NavBar>
            </LayoutHeader>
            <LayoutContent class={bemClass('__wrap-container')}>
              <Layout class={bemClass('__wrap')}>
                {isSmallerLg.value ? (
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
                      <ProMenu menu={menus} v-slots={{ icon: slots.menuIcon }} />
                    </Scrollbar>
                  </Drawer>
                ) : (
                  <LayoutSider breakpoint="xl" collapsible>
                    <Scrollbar outerClass={bemClass('__menu-scrollbar')}>
                      <ProMenu menu={menus} v-slots={{ icon: slots.menuIcon }} />
                    </Scrollbar>
                  </LayoutSider>
                )}
                <LayoutContent class={bemClass('__content')}>
                  {slots.default?.() || <RouterView />}
                </LayoutContent>
              </Layout>
            </LayoutContent>
          </Layout>
        </Spin>
      )
    }
  },
})
