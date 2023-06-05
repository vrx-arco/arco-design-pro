import { ResolveConfig, logger, mergePackageJson } from '@vrx/cp'
import { genUnComponentsResolver } from './helper'
import { ArcoStyleRes } from '../arco-style/findArcoStyle'

export const unComponents = async (
  config: ResolveConfig,
  { mjsStyleCssComp, mjsStyleJsComp }: ArcoStyleRes,
  vrxStyle: Record<string, string[]>
) => {
  const { packageJson, formatExt } = config
  const success = logger.run('generate unplugin-components resolver')

  await genUnComponentsResolver({
    packageName: packageJson.name!,
    option: {
      'importStyle?': "'css' | 'less'",
      'sideEffect?': 'boolean',
      'theme?': 'string',
    },
    header:
      `export const mjsStyleCssComp = ${JSON.stringify(mjsStyleCssComp)};\n` +
      `export const mjsStyleJsComp = ${JSON.stringify(mjsStyleJsComp)};\n` +
      `export const vrxStyle = ${JSON.stringify(vrxStyle)};`,
    resolve: `(name:string) => {
      if (Reflect.has(mjsStyleCssComp,name)) {
      const importStyle = options.importStyle ?? 'css'
  
      const config: ComponentInfo = {
        name,
        from: '${packageJson.name}',
      }
      if(options.sideEffect!==false){
        const styles = importStyle=='css' ? mjsStyleCssComp[name]:mjsStyleJsComp[name]
        styles.push(...vrxStyle[name])
        config.sideEffects = styles
        if(Array.isArray(config.sideEffects) && options.theme){
          config.sideEffects = config.sideEffects.map(v=>{
            if(typeof v==='string'&&options.theme){
              return v.replace(/^@arco-design\\/web-vue/, options.theme)
            }
            return v
          })
        }
      }
      return config
    }
    }`,
    target: 'node16',
  })

  config.packageJson = await mergePackageJson({
    exports: {
      './resolver': {
        import: `./resolver${formatExt.mjs}`,
        require: `./resolver${formatExt.cjs}`,
        types: './resolver.d.ts',
      },
    },
    files: [`resolver${formatExt.mjs}`, `resolver${formatExt.cjs}`, 'resolver.d.ts'],
  })

  success()
}
