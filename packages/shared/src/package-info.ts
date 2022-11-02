import path from 'node:path'
import fs from 'fs-extra'

export const getPackageInfo = () => {
  const packagePath = path.join(process.cwd(), 'package.json')
  return fs.readJSONSync(packagePath)
}
