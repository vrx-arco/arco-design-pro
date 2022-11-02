import { GenDoc } from './helper'
import { lowerFirst } from 'scule'
export interface GenArcoStyle {
  cjsStyleJsComp: Record<string, string[]>
  mjsStyleJsComp: Record<string, string[]>
  cjsStyleCssComp: Record<string, string[]>
  mjsStyleCssComp: Record<string, string[]>
  cjsStyleJs: string
  mjsStyleJs: string
  cjsStyleCss: string
  mjsStyleCss: string
}
export const genArcoStyle = (configs: GenDoc[]): GenArcoStyle => {
  const cjsStyleJsComp: Record<string, string[]> = {}
  const mjsStyleJsComp: Record<string, string[]> = {}
  const cjsStyleCssComp: Record<string, string[]> = {}
  const mjsStyleCssComp: Record<string, string[]> = {}
  configs.forEach((item) => {
    cjsStyleJsComp[item.name] = item.arco.map(
      (item) => `require("@arco-design/web-vue/lib/${lowerFirst(item)}/style/index.js");`
    )
    mjsStyleJsComp[item.name] = item.arco.map(
      (item) => `import '@arco-design/web-vue/es/${lowerFirst(item)}/style/index.js'`
    )
    cjsStyleCssComp[item.name] = item.arco.map(
      (item) => `require("@arco-design/web-vue/lib/${lowerFirst(item)}/style/css.js");`
    )
    mjsStyleCssComp[item.name] = item.arco.map(
      (item) => `import '@arco-design/web-vue/es/${lowerFirst(item)}/style/css.js'`
    )
  })

  const cjsStyleJs = new Set<string>()
  Object.values(cjsStyleJsComp).forEach((value) => {
    value.forEach((item) => {
      cjsStyleJs.add(item)
    })
  })

  const mjsStyleJs = new Set<string>()
  Object.values(mjsStyleJsComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleJs.add(item)
    })
  })

  const cjsStyleCss = new Set<string>()
  Object.values(cjsStyleCssComp).forEach((value) => {
    value.forEach((item) => {
      cjsStyleCss.add(item)
    })
  })

  const mjsStyleCss = new Set<string>()
  Object.values(mjsStyleCssComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleCss.add(item)
    })
  })

  return {
    cjsStyleJsComp,
    mjsStyleJsComp,
    cjsStyleCssComp,
    mjsStyleCssComp,
    cjsStyleJs: `"use strict";\n\n${[...cjsStyleJs].join('\n')}`,
    mjsStyleJs: [...mjsStyleJs].join('\n'),
    cjsStyleCss: `"use strict";\n\n${[...cjsStyleCss].join('\n')}`,
    mjsStyleCss: [...mjsStyleCss].join('\n'),
  }
}
