import { pascalCase } from 'scule'
import { TypeObject, genInterface } from 'knitwork'
import { build } from 'tsup'
import { writeTS } from 'void-fs'
import { logger } from '@vrx/cp'

export const genUnComponentsResolver = async ({
  packageName,
  option,
  header,
  resolve,
  target,
}: {
  packageName: string
  option?: TypeObject
  header?: string
  resolve: string
  target: string | string[]
}) => {
  const name = pascalCase(packageName!.replace('/', '-').replace('@', ''))

  const options = option && genInterface(`${name}ResolverOption`, option, { export: true })
  const resolver = `
  import type { ComponentInfo,ComponentResolver } from 'unplugin-vue-components'
  ${header || ''}
  ${options || ''}
  
  export function ${name}Resolver(${
    option ? `options:${name}ResolverOption` : ''
  }):ComponentResolver {
  return {
    type: 'component',
    resolve: ${resolve},
  }
}`

  logger.file(resolver.length, 'resolver.ts')
  await writeTS('resolver.ts', resolver)
  await build({
    entry: ['resolver.ts'],
    clean: false,
    format: ['esm', 'cjs'],
    dts: true,
    outDir: process.cwd(),
    target: target as any,
    platform: 'node',
  })
}
