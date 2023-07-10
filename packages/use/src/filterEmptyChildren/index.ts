import { Comment, Fragment, Text } from 'vue'

const isEmptyElement = (c) =>
  c &&
  (c.type === Comment ||
    (c.type === Fragment && c.children.length === 0) ||
    (c.type === Text && c.children.trim() === ''))

export const filterEmptyChildren = (children: any[] = []) => {
  const res: any[] = []
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child)
      return
    }
    if (child?.type === Fragment) {
      res.push(...filterEmptyChildren(child.children))
      return
    }
    res.push(child)
  })
  return res.filter((c) => !isEmptyElement(c))
}
