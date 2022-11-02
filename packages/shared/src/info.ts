import glob from 'fast-glob'
import _jiti, { JITI } from 'jiti'
import path from 'node:path'
import { GenDoc } from './helper'
import { getPackageInfo } from './package-info'
import { genWebTypes } from './web-types'
import { genArcoStyle } from './arco-style'
import { genComponentsDts } from './components-dts'
import { genUnComponentsResolver } from './uncomponents'
function getConfig(jiti: JITI, configPath: string): GenDoc {
  const _config = jiti(path.join(process.cwd(), configPath)).default
  if (!_config) {
    return {} as GenDoc
  }
  return _config
}

export const genInfo = async () => {
  const packageInfo = getPackageInfo()
  const jiti = _jiti(undefined as any, { requireCache: false, cache: false, v8cache: false })

  const docConfig = await glob(['src/**/*.doc.{tsx,ts}'])

  const configs = docConfig.map((item) => getConfig(jiti, item))

  const webTypes = genWebTypes(configs, packageInfo)

  const arcoStyle = genArcoStyle(configs)

  const resolver = genUnComponentsResolver(packageInfo, arcoStyle)

  const componentsDts = genComponentsDts(configs, packageInfo)

  return {
    webTypes,
    ...arcoStyle,
    resolver,
    componentsDts,
  }
}
