import { createPlugin } from '@vrx/cp'
import { ArcoStyle } from './arco-style'
import { unComponents } from './unComponents'

import type {} from '@vrx/cp'

export const vrxArcoPlugin = createPlugin(() => {
  const arcoStyle = new ArcoStyle()
  return {
    name: 'vrx-cp:arco',
    async configResolved(config) {
      await arcoStyle.read(config)
    },
    async buildStart(config) {
      arcoStyle.clean(config)
    },
    async buildEnd(config) {
      await arcoStyle.write(config)
      await unComponents(config, arcoStyle.arcoStyle)
    },
  }
})

declare module '@vrx/cp' {
  interface ResolveGenDoc {
    arco: string[]
  }
  interface GenDoc {
    arco: string[]
  }
}
