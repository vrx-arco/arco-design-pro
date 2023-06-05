import { ResolveConfig } from '@vrx/cp'
import { join } from 'node:path'
import { exists } from 'void-fs'

const resolveStyleImport = async (config: ResolveConfig, component: string) => {
  const name = config.packageJson.name!
  const _import = ['style', component, 'style', 'index.css']
  if (await exists(join(..._import))) {
    return [name + '/' + _import.join('/')]
  }
  return []
}

export const findStyleImports = async (config: ResolveConfig) => {
  const obj = {}
  for (const item of config.genDoc.names) {
    const style = await resolveStyleImport(config, item)
    obj[item] = style
  }
  return obj
}
