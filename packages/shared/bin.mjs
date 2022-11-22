#!/usr/bin/env node

import { arcoBuild, genUnComponentsResolver } from '@vrx/cp'
import { readPackageJSON } from 'pkg-types'

await arcoBuild({
  before: async (_, { mjsStyleCssComp, mjsStyleJsComp }) => {
    const { name } = await readPackageJSON()
    await genUnComponentsResolver(
      name,
      {
        'importStyle?': "'css' | 'less'",
        'sideEffect?': 'boolean',
      },
      `const mjsStyleCssComp = ${JSON.stringify(mjsStyleCssComp)};
  const mjsStyleJsComp = ${JSON.stringify(mjsStyleJsComp)};`,

      `(name: string) => {
      if (Reflect.has(mjsStyleCssComp,name)) {
        const importStyle = options.importStyle ?? 'css'

        const config: ComponentInfo = {
          name,
          from: '${name}',
        }
        if(options.sideEffect!==false){
          config.sideEffects = importStyle=='css' ? mjsStyleCssComp[name]:mjsStyleJsComp[name]
        }
        return config
      }
    }`
    )
  },
})
