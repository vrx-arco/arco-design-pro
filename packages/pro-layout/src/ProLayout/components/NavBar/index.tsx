import { defineComponent } from 'vue'
import { Space, TypographyTitle } from '@arco-design/web-vue'
import { IconMenuFold } from '@vrx-arco/icon'
import { propsSlot, useShareBreakpoints } from '@vrx-arco/use'
import { style } from '../../../style/var'

export const NavBar = defineComponent({
  name: 'vrx-arco-navBar',
  props: {
    logo: {
      type: String,
      default:
        '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image',
    },
    title: {
      type: String,
      default: 'Acro Pro',
    },
  },
  emits: ['menuClick'],
  setup: (props, { slots, emit }) => {
    const { bemClass } = style('pro-layout-navbar')
    const breakpoints = useShareBreakpoints()
    const isSmallerLg = breakpoints.smaller('lg')
    return () => {
      const { logo } = props
      const logoSlot = slots.logo?.()
      const logoContainerSlot = slots.logoContainer?.()

      const title = propsSlot(slots, props, 'title')

      /**
       * 渲染中央插槽
       */
      const renderCenterContent = () => {
        const content = slots.content?.()
        if (content) {
          return <div class={bemClass('__center-content')}>{content}</div>
        }
      }

      return (
        <div class={bemClass()}>
          <div class={bemClass('__left-side')}>
            {logoContainerSlot || (
              <Space direction="horizontal">
                {logoSlot || <img alt="logo" src={logo} />}
                {isSmallerLg.value || (
                  <TypographyTitle style={{ margin: 0, fontSize: '18px' }} heading={5}>
                    {title}
                  </TypographyTitle>
                )}
              </Space>
            )}
            {isSmallerLg.value && (
              <IconMenuFold
                class={bemClass('__left-side--smaller')}
                {...{ onClick: () => emit('menuClick') }}
              />
            )}
          </div>
          {renderCenterContent()}
          <div class={bemClass('__right-side')}>{slots.default?.()}</div>
        </div>
      )
    }
  },
})
