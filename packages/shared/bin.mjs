#!/usr/bin/env node

import { genInfo } from './dist/index.mjs'
import prettier from 'prettier'
import fs from 'fs-extra'
import path from 'node:path'
import prettierConfig from '@vill-v/prettier-config'

const { webTypes, cjsStyleJs, mjsStyleJs, mjsStyleCss, cjsStyleCss, componentsDts, resolver } =
  await genInfo()

await fs.outputJSON(path.join(process.cwd(), 'web-types.json'), webTypes, { spaces: '\t' })

await fs.outputFile(path.join(process.cwd(), 'arco-style.js'), cjsStyleJs)

await fs.outputFile(path.join(process.cwd(), 'arco-style.mjs'), mjsStyleJs)

await fs.outputFile(path.join(process.cwd(), 'arco-style-css.mjs'), mjsStyleCss)

await fs.outputFile(path.join(process.cwd(), 'arco-style-css.js'), cjsStyleCss)

await fs.outputFile(
  path.join(process.cwd(), 'resolver.ts'),
  prettier.format(resolver, {
    ...prettierConfig,
    parser: 'typescript',
  })
)

await fs.outputFile(
  path.join(process.cwd(), 'components.d.ts'),
  prettier.format(componentsDts, {
    ...prettierConfig,
    parser: 'typescript',
  })
)
