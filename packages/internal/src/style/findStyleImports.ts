import { join } from 'node:path'
import { ResolveConfig } from '@vrx/cp'
import { exists } from 'void-fs'

const resolveStyleImport = async (config: ResolveConfig, component: string) => {
  const name = config.packageJson.name!
  const _import = ['style', component, 'style', 'index.css']
  if (await exists(join(..._import))) {
    return name + '/' + _import.join('/')
  }
  return
}

export const findStyleImports = async (config: ResolveConfig) => {
  const obj = {}
  for (const item of config.genDoc.docs) {
    const _extStyle = item.style || []
    _extStyle.push(item.name)
    const styles = await Promise.all(_extStyle.map((item) => resolveStyleImport(config, item)))
    obj[item.name] = styles.filter((item) => !!item)
  }
  return obj
}
