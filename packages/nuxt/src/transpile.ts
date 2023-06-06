import { Nuxt } from '@nuxt/schema'
import { createRequire } from 'node:module'
import { dirname } from 'node:path'

const require = createRequire(import.meta.url)
export const transpileNoSSRFriendly = (nuxt: Nuxt) => {
  nuxt.options.build.transpile ||= []
  nuxt.options.build.transpile.push(/@arco-design\/web-vue/)
  nuxt.options.build.transpile.push('@vrx-arco/icon')
  nuxt.options.alias ||= {}
  nuxt.options.alias.dayjs = dirname(require.resolve('dayjs/esm'))
}
