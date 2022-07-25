import { defineComponent } from 'vue'
import { Layout } from '@arco-design/web-vue'
import { style } from './style'
import { oneOf, string } from 'vue-types'
import { provideSearchLayout } from './context'

export const SearchLayout = defineComponent({
  name: 'vrx-arco-search-layout',
  props: {
    /**
     * 布局类型
     * card: 整体布局作为一个卡片类型
     * normal: 分体式卡片布局
     */
    type: oneOf(['card', 'normal'] as const).def('normal'),
    /**
     * 设置标题
     */
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
