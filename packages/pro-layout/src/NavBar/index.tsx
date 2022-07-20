import { defineComponent } from 'vue'
import { Space, TypographyTitle } from '@arco-design/web-vue'
import { IconMenuFold } from '@arco-design/web-vue/es/icon'
import { string } from 'vue-types'
import { useShareBreakpoints } from '@vrx-arco/use'
import { style } from './styles'
export const NavBar = defineComponent({
  name: 'vrx-arco-navBar',
  props: {
    logo: string().def(
      '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image'
    ),
    title: string().def('Acro Pro'),
  },
  emits: ['menuClick'],
  setup: (props, { slots, emit }) => {
    style()
    const breakpoints = useShareBreakpoints()
    const isSmallerLg = breakpoints.smaller('lg')
    return () => {
      const { logo, title } = props
      const logoSlot = slots.logo?.()
      const logoContainerSlot = slots.logoContainer?.()
      return (
        <div class="vrx-arco-navbar">
          <div class="vrx-arco-navbar__left-side">
            {logoContainerSlot || (
              <Space direction="horizontal">
                {logoSlot || <img alt="logo" src={logo} />}
                {isSmallerLg.value || (
                  <TypographyTitle style={{ margin: 0, fontSize: '18px' }} heading={5}>
                    {slots.title?.() || title}
                  </TypographyTitle>
                )}
              </Space>
            )}
            {isSmallerLg.value && (
              <IconMenuFold
                style="font-size: 22px; cursor: pointer;margin-left:20px"
                {...{ onClick: () => emit('menuClick') }}
              />
            )}
          </div>
          <div class="vrx-arco-navbar__right-side">{slots.default?.()}</div>
        </div>
      )
    }
  },
})
