import { join, resolve } from 'node:path'
import { pascalCase } from 'scule'
import { TypeObject, genInterface } from 'knitwork'
import { writeTS } from 'void-fs'
import { logger } from '@vrx/cp'

const unpluginComponentsDir = resolve(process.cwd(), '..', 'helper')
export const genUnComponentsResolver = async ({
  packageName,
  option,
  header,
  resolve,
}: {
  packageName: string
  option?: TypeObject
  header: string
  resolve: string
}) => {
  const name = pascalCase(packageName!.replace('/', '-').replace('@', ''))

  const options = option && genInterface(`${name}ResolverOption`, option, { export: true })
  const resolver = `
  import type { ComponentInfo,ComponentResolver } from 'unplugin-vue-components'
  import {mjsStyleCssComp,mjsStyleJsComp,vrxStyle} from './constant'
  ${options || ''}
  
  export function ${name}Resolver(${
    option ? `options:${name}ResolverOption` : ''
  }):ComponentResolver {
  return {
    type: 'component',
    resolve: ${resolve},
  }
}`
  logger.file(resolver.length + header.length, 'resolver')
  const cwd = join(unpluginComponentsDir, 'src', packageName.split('/')[1])
  await writeTS('constant.ts', header, { cwd })
  await writeTS('index.ts', resolver, { cwd })
}
