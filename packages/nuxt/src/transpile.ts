import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import { Nuxt } from '@nuxt/schema'

const require = createRequire(import.meta.url)
export const transpileNoSSRFriendly = (nuxt: Nuxt) => {
  nuxt.options.build.transpile ||= []
  nuxt.options.build.transpile.push(/@arco-design\/web-vue/)
  nuxt.options.build.transpile.push('@vrx-arco/pro-components')
  nuxt.options.alias ||= {}
  const dayjsAlias = dirname(require.resolve('dayjs/esm'))
  nuxt.options.alias['dayjs/esm'] = dayjsAlias
  nuxt.options.alias.dayjs = dayjsAlias
}
