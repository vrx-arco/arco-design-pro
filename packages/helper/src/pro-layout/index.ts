import type { ComponentInfo, ComponentResolver } from 'unplugin-vue-components'
import { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } from './constant'

export interface VrxArcoProLayoutResolverOption {
  importStyle?: 'css' | 'less'
  sideEffect?: boolean
  theme?: string
}

export function VrxArcoProLayoutResolver(
  options: VrxArcoProLayoutResolverOption
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (Reflect.has(mjsStyleCssComp, name)) {
        const importStyle = options.importStyle ?? 'css'

        const config: ComponentInfo = {
          name,
          from: '@vrx-arco/pro-layout',
        }
        if (options.sideEffect !== false) {
          const styles = importStyle == 'css' ? mjsStyleCssComp[name] : mjsStyleJsComp[name]
          styles.push(...vrxStyle[name])
          config.sideEffects = styles
          if (Array.isArray(config.sideEffects) && options.theme) {
            config.sideEffects = config.sideEffects.map((v) => {
              if (typeof v === 'string' && options.theme) {
                return v.replace(/^@arco-design\/web-vue/, options.theme)
              }
              return v
            })
          }
        }
        return config
      }
    },
  }
}
