import { defineComponent } from 'vue'
import { bannerStyle } from './style'
import { string } from 'vue-types'

export const LoginBanner = defineComponent({
  name: 'vrx-arco-login-banner',
  props: {
    title: string(),
    subtitle: string(),
    image: string(),
  },
  setup: (props, { slots }) => {
    const { bemClass } = bannerStyle()
    return () => {
      const { title, subtitle, image } = props
      return (
        <div class={bemClass()}>
          {slots.title?.() || <div class={bemClass('__title')}>{title}</div>}
          {slots.subtitle?.() || <div class={bemClass('__subtitle')}>{subtitle}</div>}
          {image && <img class={bemClass('__image')} src={image} alt="banner" />}
        </div>
      )
    }
  },
})
