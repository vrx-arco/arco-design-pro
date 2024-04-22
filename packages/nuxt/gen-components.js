import { loadFile, writeFile } from 'magicast'
import { resolveModuleExportNames } from 'mlly'
import { writeFile as $_writeFile, exists } from 'void-fs'

const filename = 'src/config.ts'

if (!(await exists(filename))) {
  await $_writeFile(filename, '')
}
const mod = await loadFile(filename)

const arco = await resolveModuleExportNames('@arco-design/web-vue/es')
const arcoIcon = await resolveModuleExportNames('@arco-design/web-vue/es/icon')
const vrxArco = await resolveModuleExportNames('@vrx-arco/pro-components')

const vrxArcoColorPicker = await resolveModuleExportNames('@vrx-arco/color-picker')

mod.exports.arco = arco.filter((key) => /^[A-Z]/.test(key))
mod.exports.arcoIcon = arcoIcon.filter((key) => /^[A-Z]/.test(key))
mod.exports.vrxArco = vrxArco.filter((key) => /^[A-Z]/.test(key))
mod.exports.vrxArcoColorPicker = vrxArcoColorPicker.filter((key) => /^[A-Z]/.test(key))

await writeFile(mod, filename)
