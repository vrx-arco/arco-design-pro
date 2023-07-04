import { ResolveConfig } from '@vrx/cp'
import { findStyleImports } from './findStyleImports'

export class VrxStyle {
  style: Record<string, string[]>
  constructor() {
    this.style = {}
  }

  async read(config: ResolveConfig) {
    this.style = await findStyleImports(config)
  }
}
