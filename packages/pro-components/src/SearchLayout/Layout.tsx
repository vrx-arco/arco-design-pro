import { PropType, defineComponent, toRef } from 'vue'
import { Layout } from '@arco-design/web-vue'
import { style } from '../style/var'
import { provideSearchLayout } from './context'

export const SearchLayout = defineComponent({
  name: 'vrx-arco-search-layout',
  props: {
    /**
     * 布局类型
     * card: 整体布局作为一个卡片类型
     * normal: 分体式卡片布局
     */
    type: {
      type: String as PropType<'card' | 'normal'>,
      default: 'normal',
    },
    /**
     * 设置标题
     */
    title: String,
  },
  setup: (props, { slots }) => {
    const { bemClass } = style('search-layout')

    const type = toRef(props, 'type')
    const title = toRef(props, 'title')

    provideSearchLayout({ type, title, bemClass })

    return () => {
      return (
        <Layout class={{ [bemClass()]: true, [bemClass('--card')]: props.type === 'card' }}>
          {slots.default?.()}
        </Layout>
      )
    }
  },
})
