import { defineComponent } from 'vue'
import { style } from '../style/var'

export const LoginBanner = defineComponent({
  name: 'vrx-arco-login-banner',
  props: {
    title: String,
    subtitle: String,
    image: String,
  },
  setup: (props, { slots }) => {
    const { bemClass } = style('login-page-banner')
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
