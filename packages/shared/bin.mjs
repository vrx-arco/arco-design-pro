#!/usr/bin/env node

import { arcoVrxCP } from '@vrx/cp'
import { readPackageJSON } from 'pkg-types'

const { name } = await readPackageJSON()
await arcoVrxCP({
  resolve: {
    option: {
      'importStyle?': "'css' | 'less'",
      'sideEffect?': 'boolean',
      'theme?': 'string',
    },
    header: (_, { mjsStyleCssComp, mjsStyleJsComp }) => {
      return `const mjsStyleCssComp = ${JSON.stringify(mjsStyleCssComp)};
  const mjsStyleJsComp = ${JSON.stringify(mjsStyleJsComp)};`
    },
    resolve: () => {
      return `(name: string) => {
      if (Reflect.has(mjsStyleCssComp,name)) {
        const importStyle = options.importStyle ?? 'css'

        const config: ComponentInfo = {
          name,
          from: '${name}',
        }
        if(options.sideEffect!==false){
          config.sideEffects = importStyle=='css' ? mjsStyleCssComp[name]:mjsStyleJsComp[name]
          if(Array.isArray(config.sideEffects) && options.theme){
            config.sideEffects = config.sideEffects.map(v=>{
              if(typeof v==='string'){
                return v.replace(/^@arco-design\\/web-vue/, options.theme!)
              }
              return v
            })
          }
        }
        return config
      }
    }`
    },
  },
})
