import { defineComponent } from 'vue'
import { Space, TypographyTitle } from '@arco-design/web-vue'
import { IconMenuFold } from '@vrx-arco/icon'
import { string } from 'vue-types'
import { propsSlot, useShareBreakpoints } from '@vrx-arco/use'
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
    const { bemClass } = style()
    const breakpoints = useShareBreakpoints()
    const isSmallerLg = breakpoints.smaller('lg')
    return () => {
      const { logo } = props
      const logoSlot = slots.logo?.()
      const logoContainerSlot = slots.logoContainer?.()

      const title = propsSlot(slots, props, 'title')

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
          <div class={bemClass('__right-side')}>{slots.default?.()}</div>
        </div>
      )
    }
  },
})