import { PropType, VNodeTypes, defineComponent, isVNode } from 'vue'
import { propsSlot } from '@vrx-arco/use'
import { style } from '../style/var'

export const ProCardMeta = defineComponent({
  name: 'vrx-arco-pro-card-meta',
  props: {
    /**
     * 标题
     */
    title: {} as PropType<any>,
    /**
     * 头像
     */
    avatar: {} as PropType<any>,
    /**
     * 描述
     */
    description: {} as PropType<any>,
    /**
     * 操作按钮
     */
    actions: Array as PropType<any[]>,
  },
  setup: (props, { slots }) => {
    const { bemClass } = style('pro-card-meta')
    const getAction = (actions: VNodeTypes[]) => {
      return actions.map(
        (action, index) =>
          isVNode(action) && (
            <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
              <span>{action}</span>
            </li>
          )
      )
    }
    return () => {
      const avatar = propsSlot(slots, props, 'avatar')
      const title = propsSlot(slots, props, 'title')
      const description = propsSlot(slots, props, 'description')
      const actions = propsSlot(slots, props, 'actions')

      const avatarDom = avatar ? <div class={bemClass('__avatar')}>{avatar}</div> : null

      const titleDom = title ? <div class={bemClass('__title')}>{title}</div> : null

      const descriptionDom = description ? (
        <div class={bemClass('__description')}>{description}</div>
      ) : null

      const MetaDetail =
        titleDom || descriptionDom ? (
          <div class={bemClass('__detail')}>
            {titleDom}
            {descriptionDom}
          </div>
        ) : null

      const actionsDom = actions?.length ? (
        <ul class={bemClass('__actions')}>{getAction(actions)}</ul>
      ) : null

      return (
        <div class={bemClass()}>
          {avatarDom}
          {MetaDetail}
          {actionsDom}
        </div>
      )
    }
  },
})
