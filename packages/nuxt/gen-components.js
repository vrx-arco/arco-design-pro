import { join } from 'node:path/posix'
import { loadFile, writeFile } from 'magicast'
import { findExports, loadURL, resolveModuleExportNames, resolvePath } from 'mlly'
import { writeFile as $_writeFile, exists } from 'void-fs'

async function resolveModuleExportComponents(id) {
  const url = await resolvePath(id)
  const code = await loadURL(url)
  const exports = findExports(code)
  return exports
    .filter((item) => /^[A-Z]/.test(item.name))
    .map((item) => ({ filePath: join(id, item.specifier), name: item.name }))
}

const filename = 'src/config.ts'

if (!(await exists(filename))) {
  await $_writeFile(filename, '')
}
const mod = await loadFile(filename)

const arco = await resolveModuleExportComponents('@arco-design/web-vue/es')
const arcoIcon = await resolveModuleExportComponents('@arco-design/web-vue/es/icon')
const vrxArco = await resolveModuleExportNames('@vrx-arco/pro-components')

const vrxArcoColorPicker = await resolveModuleExportNames('@vrx-arco/color-picker')

mod.exports.arco = arco
mod.exports.arcoIcon = arcoIcon
mod.exports.vrxArco = vrxArco.filter((key) => /^[A-Z]/.test(key))
mod.exports.vrxArcoColorPicker = vrxArcoColorPicker.filter((key) => /^[A-Z]/.test(key))

await writeFile(mod, filename)
