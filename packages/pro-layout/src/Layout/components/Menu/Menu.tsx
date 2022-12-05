import { FunctionalComponent, computed, defineComponent, ref, toRef, watch } from 'vue'
import { Menu } from '@arco-design/web-vue'
import { array } from 'vue-types'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'

interface MenuItemProps {
  menu: RouteRecordRaw
}

const MenuItem: FunctionalComponent<MenuItemProps> = ({ menu }) => {
  if (menu.meta?.hidden) {
    return
  }
  if (!menu.children) {
    return (
      <Menu.Item v-slots={{ icon: () => menu.meta?.icon }} key={menu.name as string}>
        {menu.meta!.title}
      </Menu.Item>
    )
  }
  if (menu.meta?.list) {
    const firstChild = menu.children[0].name
    return (
      <Menu.Item v-slots={{ icon: () => menu.meta?.icon }} key={firstChild as string}>
        {menu.meta!.title}
      </Menu.Item>
    )
  }
  return (
    <Menu.SubMenu
      v-slots={{ icon: () => menu.meta?.icon }}
      key={menu.name as string}
      title={menu.meta!.title as string}
    >
      {menu.children?.map((item) => (
        <MenuItem menu={item} key={item.name} />
      ))}
    </Menu.SubMenu>
  )
}

export const ProMenu = defineComponent({
  name: 'vrx-arco-pro-menu',
  props: {
    menu: array<RouteRecordRaw>().def([]),
  },
  setup: (props) => {
    const menu = toRef(props, 'menu')
    const route = useRoute()
    const router = useRouter()

    const active = computed<string>(() => route.name as string)

    const selectedKeys = ref<string[]>([])

    const openKeys = ref<string[]>([])

    watch(
      active,
      () => {
        openKeys.value = route.matched.map((item) => item.name as string)
        selectedKeys.value = [active.value]
      },
      { immediate: true }
    )

    const onMenuItemClick = (key: string) => {
      router.push({ name: key })
    }
    return () => (
      <Menu
        v-model:selectedKeys={selectedKeys.value}
        v-model:openKeys={openKeys.value}
        {...{ autoOpenSelected: true, accordion: true, autoScrollIntoView: true, onMenuItemClick }}
      >
        {menu.value.map((item) => (
          <MenuItem menu={item} key={item.name} />
        ))}
      </Menu>
    )
  },
})
