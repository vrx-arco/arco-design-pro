import { GenDoc } from '@vrx/cp'
import { kebabCase } from 'scule'

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

export const findArcoStyle = <Doc extends GenDoc = GenDoc>(
  configs: Doc[],
  theme = '@arco-design/web-vue'
): GenArcoStyle => {
  const cjsStyleJsComp: Record<string, string[]> = {}
  const mjsStyleJsComp: Record<string, string[]> = {}
  const cjsStyleCssComp: Record<string, string[]> = {}
  const mjsStyleCssComp: Record<string, string[]> = {}
  configs.forEach((item) => {
    const arco = item.arco || []
    cjsStyleJsComp[item.name] = arco.map((item) => `${theme}/lib/${kebabCase(item)}/style/index.js`)
    mjsStyleJsComp[item.name] = arco.map((item) => `${theme}/es/${kebabCase(item)}/style/index.js`)
    cjsStyleCssComp[item.name] = arco.map((item) => `${theme}/lib/${kebabCase(item)}/style/css.js`)
    mjsStyleCssComp[item.name] = arco.map((item) => `${theme}/es/${kebabCase(item)}/style/css.js`)
  })

  const cjsStyleJs = new Set<string>()
  Object.values(cjsStyleJsComp).forEach((value) => {
    value.forEach((item) => {
      cjsStyleJs.add(`require("${item}");`)
    })
  })

  const mjsStyleJs = new Set<string>()
  Object.values(mjsStyleJsComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleJs.add(`import '${item}'`)
    })
  })

  const cjsStyleCss = new Set<string>()
  Object.values(cjsStyleCssComp).forEach((value) => {
    value.forEach((item) => {
      cjsStyleCss.add(`require("${item}");`)
    })
  })

  const mjsStyleCss = new Set<string>()
  Object.values(mjsStyleCssComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleCss.add(`import '${item}'`)
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

export type ArcoStyleRes = ReturnType<typeof findArcoStyle>
