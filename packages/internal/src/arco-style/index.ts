import { ResolveConfig, logger } from '@vrx/cp'
import { del } from 'void-fs'
import { ArcoStyleRes, findArcoStyle } from './findArcoStyle'
import { writeArcoStyle } from './writeArcoStyle'

export class ArcoStyle {
  arcoStyle: ArcoStyleRes

  constructor() {
    // @ts-ignore
    this.arcoStyle = {}
  }

  async read(config: ResolveConfig) {
    const success = logger.run('正在生成组件所需 arco-design 样式文件')
    this.arcoStyle = await findArcoStyle(config.genDoc.docs, config.theme)
    success()
  }

  async write(config: ResolveConfig) {
    const success = logger.run('正在写入组件所需 arco-design 样式文件')
    await writeArcoStyle(config, this.arcoStyle)
    success()
  }

  async clean(config: ResolveConfig) {
    const { formatExt } = config
    await del([
      `arco-style${formatExt.cjs}`,
      `arco-style${formatExt.mjs}`,
      `arco-style-css${formatExt.mjs}`,
      `arco-style-css${formatExt.cjs}`,
    ])
  }
}
