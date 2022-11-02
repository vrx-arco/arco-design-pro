export interface GenDoc {
  name: string
  props: {
    [key: string]: {
      type: 'string' | 'boolean' | 'array' | 'object' | 'any' | 'number' | string
      desc: string
    }
  }
  slots: {
    name: string
    desc: string
  }[]
  events: {
    name: string
    desc: string
  }[]
  arco: string[]
}

export const defineGenDoc = (options: GenDoc) => options
