import { defineComponent } from 'vue'
import { ProLayout } from '@vrx-arco/pro-layout'
import { moduleRoute } from '../router/modules'
import { AvatarDropDown, ThemeDarkLight, ToggleFullScreen } from '@vrx-arco/pro-components'
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
              <AvatarDropDown
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
