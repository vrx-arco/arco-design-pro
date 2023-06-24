import { NuxtOptions } from '@nuxt/schema'
import { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } from '@vrx-arco/pro-components/resolver'
import { VrxArcoOption } from '../type'
import { componentStyle } from '@vrx-cp/nuxt-utils'

export const vrxArcoUnplugin = (nuxtoption: NuxtOptions, vrxArco: VrxArcoOption) => {
  componentStyle(nuxtoption, {
    name: 'vrx-arco:nuxt',
    component(component) {
      const styles: string[] = []
      if (mjsStyleCssComp[component]) {
        const arcoCss = {
          less: mjsStyleJsComp[component],
          css: mjsStyleCssComp[component],
        }
        arcoCss[vrxArco.importStyle!].forEach((item) => {
          if (vrxArco.theme) {
            styles.push(item.replace(/^@arco-design\/web-vue/, vrxArco.theme))
            return
          }
          styles.push(item)
        })
      }
      // 查找组件是否有匹配的对应样式
      if (mjsStyleCssComp[component]) {
        vrxStyle[component].forEach((item) => {
          styles.push(item)
        })
      }
      return styles
    },
  })
}
