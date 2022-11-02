import { GenArcoStyle } from './arco-style'
import { pascalCase } from 'scule'

export const genUnComponentsResolver = (
  packageInfo: Record<string, any>,
  { mjsStyleCssComp, mjsStyleJsComp }: GenArcoStyle
) => {
  const name = pascalCase(packageInfo.name.replace('/', '-').replace('@', ''))
  return `
  import type { ComponentInfo,ComponentResolver } from 'unplugin-vue-components'
  const mjsStyleCssComp = ${JSON.stringify(mjsStyleCssComp)};
  const mjsStyleJsComp = ${JSON.stringify(mjsStyleJsComp)};
  export interface ${name}ResolverOption{
    importStyle?: 'css' | 'less'
    sideEffect?: boolean
  }
  
  export function ${name}Resolver(options:${name}ResolverOption):ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (Reflect.has(mjsStyleCssComp,name)) {
        const importStyle = options.importStyle ?? 'css'

        const config: ComponentInfo = {
          name,
          from: '${packageInfo.name}',
        }
        if(options.sideEffect!==false){
          config.sideEffects = importStyle=='css' ? mjsStyleCssComp[name]:mjsStyleJsComp[name]
        }
        return config
      }
    },
  }
}`
}
