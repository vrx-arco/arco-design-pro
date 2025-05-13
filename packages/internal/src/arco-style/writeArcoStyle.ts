import { ResolveConfig, mergePackageJson } from '@vrx/cp'
import { writeTS } from 'void-fs'
import { ArcoStyleRes } from './findArcoStyle'

export const writeArcoStyle = async (config: ResolveConfig, arcoStyle: ArcoStyleRes) => {
  const { formatExt } = config

  await writeTS(`arco-style${formatExt.mjs}`, arcoStyle.mjsStyleJs!)

  await writeTS(`arco-style-css${formatExt.mjs}`, arcoStyle.mjsStyleCss!)

  config.packageJson = await mergePackageJson({
    exports: {
      './arco-style': {
        import: `./arco-style${formatExt.mjs}`,
      },
      './arco-style-css': {
        import: `./arco-style-css${formatExt.mjs}`,
      },
    },
    files: [`arco-style-css${formatExt.mjs}`, `arco-style${formatExt.mjs}`],
  })
}
