import { computed, defineComponent, FunctionalComponent, ref, toRef, watch } from 'vue'
import { Menu } from '@arco-design/web-vue'
import { array } from 'vue-types'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'

interface MenuItemProps {
  menu: RouteRecordRaw
}

const MenuItem: FunctionalComponent<MenuItemProps> = ({ menu }) => {
  if (!menu.children) {
    return (
      <Menu.Item v-slots={{ icon: () => menu.meta?.icon }} key={menu.name as string}>
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

    watch(
      active,
      () => {
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
        {...{ autoOpenSelected: true, accordion: true, onMenuItemClick }}
      >
        {menu.value.map((item) => (
          <MenuItem menu={item} key={item.name} />
        ))}
      </Menu>
    )
  },
})
