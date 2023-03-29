import { PropType, defineComponent } from 'vue'
import { Avatar, Dropdown } from '@arco-design/web-vue'
import { style } from './style'
import { propsSlot } from '@vrx-arco/use'

export interface UserAvatarDropDownItem {
  value: string
  title: string
  disabled?: boolean
}

export const AvatarDropDown = defineComponent({
  name: 'vrx-arco-avatar-drop-down',
  props: {
    /**
     * 用户名
     */
    username: String,
    /**
     * 下拉框选项
     */
    dropdown: {
      type: Array as PropType<UserAvatarDropDownItem[]>,
      default: () => [],
    },
  },
  emits: ['select'],
  setup: (props, { slots, emit }) => {
    const { bemClass } = style()
    const handleSelect = (select: string) => {
      emit('select', select)
    }
    return () => {
      const { dropdown } = props
      const username = propsSlot(slots, props, 'username', 'default')
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
          <Avatar class={bemClass()}>{username}</Avatar>
        </Dropdown>
      )
    }
  },
})
