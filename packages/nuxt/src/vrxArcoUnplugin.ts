import { createUnplugin } from 'unplugin'
import { NuxtOptions } from '@nuxt/schema'
import { pascalCase } from 'scule'
import { mjsStyleCssComp, mjsStyleJsComp, vrxStyle } from '@vrx-arco/pro-components/resolver'
import MagicString from 'magic-string'
import { VrxArcoOption } from './type'

/**
 * 帮助组件自动导入样式的插件
 */
export const vrxArcoUnplugin = createUnplugin<{ option: NuxtOptions; vrxArco: VrxArcoOption }>(
  ({ option, vrxArco }) => {
    const excludeDir = [option.buildDir, ...option.modulesDir, option.serverDir]
    const src = option.srcDir
    return {
      name: 'vrx-arco:nuxt',
      enforce: 'post',
      transformInclude(id) {
        if (excludeDir.find((item) => id.startsWith(item))) {
          return false
        }
        if (id.startsWith(src)) {
          return true
        }
        return false
      },
      transform(code) {
        const styles = new Set<string>()
        // 找到所有的自动导入组件
        Array.from(code.matchAll(/_resolveComponent[0-9]*\("(.+?)"\)/g)).forEach((item) => {
          const componentMatch = item[0].match(/"(.+?)"/)

          if (!componentMatch) {
            return
          }
          // 获取组件名称
          const component = pascalCase([...componentMatch][1]).replace(/^Lazy/, '')
          // 查找是否有匹配的arco样式
          if (mjsStyleCssComp[component]) {
            const arcoCss = {
              less: mjsStyleJsComp[component],
              css: mjsStyleCssComp[component],
            }
            arcoCss[vrxArco.importStyle!].forEach((item) => {
              if (vrxArco.theme) {
                styles.add(item.replace(/^@arco-design\/web-vue/, vrxArco.theme))
                return
              }
              styles.add(item)
            })
          }
          // 查找组件是否有匹配的对应样式
          if (mjsStyleCssComp[component]) {
            vrxStyle[component].forEach((item) => {
              styles.add(item)
            })
          }
        })

        const magicString = new MagicString(code)
        if (!styles.size) {
          return
        }
        // 将样式的导入语句置于组件的最上方
        magicString.prepend([...styles].map((item) => `import "${item}";`).join('\n') + '\n')
        return magicString.toString()
      },
    }
  }
)
