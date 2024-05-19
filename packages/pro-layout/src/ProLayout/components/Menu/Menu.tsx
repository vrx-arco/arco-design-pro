import {
  FunctionalComponent,
  PropType,
  SlotsType,
  computed,
  defineComponent,
  ref,
  toRef,
  watch,
} from 'vue'
import { MenuItem as AMenuItem, Menu, SubMenu } from '@arco-design/web-vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'

interface MenuItemProps {
  menu: RouteRecordRaw
}

const MenuItem: FunctionalComponent<MenuItemProps> = ({ menu }, { slots }) => {
  const renderMenuIcon = () => slots.icon?.(menu) || menu.meta?.icon
  if (menu.meta?.hidden) {
    return
  }
  if (!menu.children) {
    return (
      <AMenuItem v-slots={{ icon: renderMenuIcon }} key={menu.name as string}>
        {menu.meta!.title}
      </AMenuItem>
    )
  }
  if (menu.meta?.list) {
    const firstChild = menu.children[0].name
    return (
      <AMenuItem v-slots={{ icon: renderMenuIcon }} key={firstChild as string}>
        {menu.meta!.title}
      </AMenuItem>
    )
  }
  return (
    <SubMenu
      v-slots={{ icon: renderMenuIcon }}
      key={menu.name as string}
      title={menu.meta!.title as string}
    >
      {menu.children?.map((item) => (
        <MenuItem menu={item} key={item.name} v-slots={{ icon: slots.icon }} />
      ))}
    </SubMenu>
  )
}

export const ProMenu = defineComponent({
  name: 'vrx-arco-pro-menu',
  props: {
    menu: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: () => [],
    },
  },
  slots: Object as SlotsType<{ icon: RouteRecordRaw }>,
  setup: (props, { slots }) => {
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
          <MenuItem
            menu={item}
            key={item.name}
            v-slots={{
              icon: slots.icon,
            }}
          />
        ))}
      </Menu>
    )
  },
})
