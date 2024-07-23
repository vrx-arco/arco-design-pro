import { NuxtOptions } from '@nuxt/schema'
import { ProComponentsConstant } from '@vrx-arco/helper'
import { ColorPickerConstant } from '@vrx-arco/color-picker-import-resolver'
import { componentStyle } from '@vrx-cp/nuxt-utils'
import { VrxArcoOption } from '../type'

export const vrxArcoUnplugin = (nuxtoption: NuxtOptions, vrxArco: VrxArcoOption) => {
  const { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } = ProComponentsConstant
  componentStyle(
    nuxtoption,
    {
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
      ...vrxArco.importStyleDir,
    },
    vrxArco.importStylePlugin
  )
}

export const vrxArcoColorPickerUnplugin = (nuxtoption: NuxtOptions, vrxArco: VrxArcoOption) => {
  const { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } = ColorPickerConstant
  componentStyle(
    nuxtoption,
    {
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
      ...vrxArco.importStyleDir,
    },
    vrxArco.importStylePlugin
  )
}
