import { GenDoc } from './helper'

export const genComponentsDts = (configs: GenDoc[], packageInfo: Record<string, any>) => {
  const components = configs.map(
    (item) => `${item.name}: typeof import('${packageInfo.name}')['${item.name}'];`
  )

  return `declare module 'vue'{
      interface GlobalComponents {
          ${components.join('\n')}
      }
  };
  export {};
  `
}
