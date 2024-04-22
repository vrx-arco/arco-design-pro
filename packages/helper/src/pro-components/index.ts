import { VrxArcoColorPickerResolver } from '@vrx-arco/color-picker-import-resolver'
import type {
  ComponentInfo,
  ComponentResolver,
  ComponentResolverObject,
} from 'unplugin-vue-components'
import { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } from './constant'

export interface VrxArcoProComponentsResolverOption {
  importStyle?: 'css' | 'less'
  sideEffect?: boolean
  theme?: string
  /**
   * 启用实验性组件 `<ColorPicker/>`的自动引入
   * @experimental
   * @default false
   */
  colorPicker?: boolean
}

const _VrxArcoColorPickerResolver = (
  options: VrxArcoProComponentsResolverOption,
  name: string
): ComponentInfo | undefined => {
  if (!options.colorPicker) {
    return
  }
  return (VrxArcoColorPickerResolver(options) as ComponentResolverObject).resolve(
    name
  ) as ComponentInfo
}

const _VrxArcoProComponentsResolver = (
  options: VrxArcoProComponentsResolverOption,
  name: string
): ComponentInfo | undefined => {
  if (Reflect.has(mjsStyleCssComp, name)) {
    const importStyle = options.importStyle ?? 'css'

    const config: ComponentInfo = {
      name,
      from: '@vrx-arco/pro-components',
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
}

export function VrxArcoProComponentsResolver(
  options: VrxArcoProComponentsResolverOption
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      const resolvers = [_VrxArcoColorPickerResolver, _VrxArcoProComponentsResolver]

      for (const resolver of resolvers) {
        const config = resolver(options, name)
        if (config) {
          return config
        }
      }
    },
  }
}
