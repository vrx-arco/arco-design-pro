import { defineComponent } from 'vue'
import { Avatar, Dropdown } from '@arco-design/web-vue'
import '@arco-design/web-vue/es/avatar/style'
import '@arco-design/web-vue/es/dropdown/style'
import { array, string } from 'vue-types'
import { style } from './style'

export interface UserAvatarDropDownItem {
  value: string
  title: string
  disabled?: boolean
}

export const AvatarDropDown = defineComponent({
  name: 'vrx-arco-avatar-drop-down',
  props: {
    username: string(),
    dropdown: array<UserAvatarDropDownItem>().def([]),
  },
  emits: ['select'],
  setup: (props, { slots, emit }) => {
    const { bemClass } = style()
    return () => {
      const { username, dropdown } = props
      const handleSelect = (select: string) => {
        emit('select', select)
      }
      return (
        <Dropdown
          onSelect={handleSelect}
          v-slots={{
            content: () =>
              slots.content?.() ||
              dropdown.map((item) => (
                <Dropdown.Option key={item.value} value={item.value} disabled={item.disabled}>
                  {item.title}
                </Dropdown.Option>
              )),
          }}
        >
          <Avatar class={bemClass()}>{slots.default?.() || username}</Avatar>
        </Dropdown>
      )
    }
  },
})
