import { GenDoc } from './helper'
import { kebabCase } from 'scule'
const genWebTypesTag = (config: GenDoc) => {
  return {
    name: kebabCase(config.name),
    attributes: Object.keys(config.props).map((key) => {
      const value = config.props[key]
      return {
        name: kebabCase(key),
        description: value.desc,
        value: {
          type: value.type,
          kind: 'expression',
        },
      }
    }),
    events: config.events.map((item) => ({ name: kebabCase(item.name), description: item.desc })),
    slots: config.slots.map((item) => ({ name: item.name, description: item.desc })),
  }
}

export const genWebTypes = (configs: GenDoc[], packageInfo: Record<string, any>) => {
  return {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    name: packageInfo.name,
    version: packageInfo.version,
    contributions: {
      html: {
        'types-syntax': 'typescript',
        'description-markup': 'markdown',
        tags: configs.map((config) => genWebTypesTag(config)),
      },
    },
  }
}
