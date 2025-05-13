import { GenDoc } from '@vrx/cp'
import { kebabCase } from 'scule'

interface GenArcoStyle {
  mjsStyleJsComp: Record<string, string[]>
  mjsStyleCssComp: Record<string, string[]>
  mjsStyleJs: string
  mjsStyleCss: string
}

export const findArcoStyle = <Doc extends GenDoc = GenDoc>(
  configs: Doc[],
  theme = '@arco-design/web-vue'
): GenArcoStyle => {
  const mjsStyleJsComp: Record<string, string[]> = {}
  const mjsStyleCssComp: Record<string, string[]> = {}
  configs.forEach((item) => {
    const arco = item.arco || []
    mjsStyleJsComp[item.name] = arco.map((item) => `${theme}/es/${kebabCase(item)}/style/index.js`)
    mjsStyleCssComp[item.name] = arco.map((item) => `${theme}/es/${kebabCase(item)}/style/css.js`)
  })

  const mjsStyleJs = new Set<string>()
  Object.values(mjsStyleJsComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleJs.add(`import '${item}'`)
    })
  })

  const mjsStyleCss = new Set<string>()
  Object.values(mjsStyleCssComp).forEach((value) => {
    value.forEach((item) => {
      mjsStyleCss.add(`import '${item}'`)
    })
  })

  return {
    mjsStyleJsComp,
    mjsStyleCssComp,
    mjsStyleJs: [...mjsStyleJs].join('\n'),
    mjsStyleCss: [...mjsStyleCss].join('\n'),
  }
}

export type ArcoStyleRes = ReturnType<typeof findArcoStyle>
