import { GenDoc } from './helper'
import { lowerFirst } from 'scule'

export const genArcoStyle = (configs: GenDoc[]) => {
  const styles = new Set<string>()
  configs.forEach((item) => {
    item.arco.forEach((item) => {
      styles.add(lowerFirst(item))
    })
  })
  const cjsStyleJs: string[] = []
  const mjsStyleJs: string[] = []
  const cjsStyleCss: string[] = []
  const mjsStyleCss: string[] = []

  styles.forEach((item) => {
    cjsStyleJs.push(`require("@arco-design/web-vue/lib/${item}/style/index.js");`)
    mjsStyleJs.push(`import '@arco-design/web-vue/es/${item}/style/index.js'`)
    cjsStyleCss.push(`require("@arco-design/web-vue/lib/${item}/style/css.js");`)
    mjsStyleCss.push(`import '@arco-design/web-vue/es/${item}/style/css.js'`)
  })

  return {
    cjsStyleJs: `"use strict";\n\n${cjsStyleJs.join('\n')}`,
    mjsStyleJs: mjsStyleJs.join('\n'),
    cjsStyleCss: `"use strict";\n\n${cjsStyleCss.join('\n')}`,
    mjsStyleCss: mjsStyleCss.join('\n'),
  }
}
