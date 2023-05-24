import { createUnplugin } from 'unplugin'
import { NuxtOptions } from '@nuxt/schema'
import { pascalCase } from 'scule'
import { mjsStyleCssComp } from '@vrx-arco/pro-components/resolver'
import MagicString from 'magic-string'
export const vrxArcoUnplugin = createUnplugin<{ option: NuxtOptions }>(({ option }) => {
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
      const styles: string[] = []
      Array.from(code.matchAll(/_resolveComponent[0-9]*\("(.+?)"\)/g)).forEach((item) => {
        const componentMatch = item[0].match(/"(.+?)"/)

        if (!componentMatch) {
          return
        }
        const component = pascalCase([...componentMatch][1]).replace(/^Lazy/, '')
        if (mjsStyleCssComp[component]) {
          styles.push(...mjsStyleCssComp[component])
        }
      })

      const magicString = new MagicString(code)
      if (!styles?.length) {
        return
      }
      magicString.prepend(styles.map((item) => `import "${item}";`).join('\n') + '\n')
      return magicString.toString()
    },
  }
})
