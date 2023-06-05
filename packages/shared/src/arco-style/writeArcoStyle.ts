import { ResolveConfig, mergePackageJson } from '@vrx/cp'
import { ArcoStyleRes } from './findArcoStyle'
import { writeTS } from 'void-fs'

export const writeArcoStyle = async (config: ResolveConfig, arcoStyle: ArcoStyleRes) => {
  const { formatExt } = config

  await writeTS(`arco-style${formatExt.cjs}`, arcoStyle.cjsStyleJs!)

  await writeTS(`arco-style${formatExt.mjs}`, arcoStyle.mjsStyleJs!)

  await writeTS(`arco-style-css${formatExt.mjs}`, arcoStyle.mjsStyleCss!)

  await writeTS(`arco-style-css${formatExt.cjs}`, arcoStyle.cjsStyleCss!)

  config.packageJson = await mergePackageJson({
    exports: {
      './arco-style': {
        import: `./arco-style${formatExt.mjs}`,
        require: `./arco-style${formatExt.cjs}`,
      },
      './arco-style-css': {
        import: `./arco-style-css${formatExt.mjs}`,
        require: `./arco-style-css${formatExt.cjs}`,
      },
    },
    files: [
      `arco-style-css${formatExt.cjs}`,
      `arco-style-css${formatExt.mjs}`,
      `arco-style${formatExt.cjs}`,
      `arco-style${formatExt.mjs}`,
    ],
  })
}
