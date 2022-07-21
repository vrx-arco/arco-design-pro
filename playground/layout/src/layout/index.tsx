import { defineComponent } from 'vue'
import { ProLayout } from '@vrx-arco/pro-layout'
import { moduleRoute } from '../router/modules'
import { ThemeDarkLight, ToggleFullScreen, UserAvatarDropDown } from '@vrx-arco/pro-components'
import { Space } from '@arco-design/web-vue'

export const Layout = defineComponent({
  setup: () => {
    return () => (
      <ProLayout
        menus={moduleRoute}
        v-slots={{
          headerToolbox: () => (
            <Space align="center">
              <ThemeDarkLight />
              <ToggleFullScreen />
              <UserAvatarDropDown
                username="whitekite"
                dropdown={[{ value: 'logout', title: '登出' }]}
              />
            </Space>
          ),
        }}
      />
    )
  },
})
