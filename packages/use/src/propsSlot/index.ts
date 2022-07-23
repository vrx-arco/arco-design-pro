export const propsSlot = <Prop extends Record<string, any> = Record<string, any>>(
  slots: any,
  props: Prop,
  key: keyof Prop,
  slotKey?: string
): any => {
  return props[key] ?? slots[slotKey || key]?.()
}
