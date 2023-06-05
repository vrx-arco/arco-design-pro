import { createPlugin } from '@vrx/cp'
import { ArcoStyle } from './arco-style'
import { unComponents } from './unComponents'

import type {} from '@vrx/cp'
import { VrxStyle } from './style'

export const vrxArcoPlugin = createPlugin(() => {
  const arcoStyle = new ArcoStyle()
  const vrxStyle = new VrxStyle()
  return {
    name: 'vrx-cp:arco',
    async configResolved(config) {
      await arcoStyle.read(config)
    },
    async css(_, config) {
      await vrxStyle.read(config)
    },
    async buildStart(config) {
      await arcoStyle.clean(config)
    },
    async buildEnd(config) {
      await arcoStyle.write(config)
      await unComponents(config, arcoStyle.arcoStyle, vrxStyle.style)
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
