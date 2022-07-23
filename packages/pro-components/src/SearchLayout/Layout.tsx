import { defineComponent } from 'vue'
import { Layout } from '@arco-design/web-vue'
import '@arco-design/web-vue/es/layout/style'
import '@arco-design/web-vue/es/card/style'
import { style } from './style'
import { oneOf, string } from 'vue-types'
import { provideSearchLayout } from './context'

export const SearchLayout = defineComponent({
  name: 'vrx-arco-search-layout',
  props: {
    type: oneOf(['card', 'normal'] as const).def('normal'),
    title: string(),
  },
  setup: (props, { slots }) => {
    const { bemClass } = style()

    provideSearchLayout({ ...props, bemClass })

    return () => {
      return (
        <Layout class={{ [bemClass()]: true, [bemClass('--card')]: props.type === 'card' }}>
          {slots.default?.()}
        </Layout>
      )
    }
  },
})
