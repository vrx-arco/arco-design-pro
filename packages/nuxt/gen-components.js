import { dirname, join } from 'node:path'
import { loadFile, writeFile } from 'magicast'
import { resolveModuleExportNames } from 'mlly'
import { fileURLToPath } from 'node:url'
import { exists, writeFile as $_writeFile } from 'void-fs'

const filename = 'src/config.ts'

if (!(await exists(filename))) {
  await $_writeFile(filename, '')
}
const mod = await loadFile(filename)

const arco = await resolveModuleExportNames('@arco-design/web-vue/es')
const arcoIcon = await resolveModuleExportNames('@arco-design/web-vue/es/icon')
const vrxArco = await resolveModuleExportNames('@vrx-arco/pro-components')
mod.exports.arco = arco.filter((key) => /^[A-Z]/.test(key))
mod.exports.arcoIcon = arcoIcon.filter((key) => /^[A-Z]/.test(key))
mod.exports.vrxArco = vrxArco.filter((key) => /^[A-Z]/.test(key))

await writeFile(mod, filename)
