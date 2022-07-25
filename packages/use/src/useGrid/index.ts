import { useShareBreakpoints } from '../useShareBreakpoints'
import { computed, Ref, unref } from 'vue'

export const useGrid = (
  useColumn: boolean,
  column: Ref<Record<string, any> | number>,
  gutter?: Ref<number | [number, number]>
) => {
  const getColumn = (column: number) => (useColumn ? Math.ceil(24 / column) : column)
  const { xxl, xl, lg, md, sm, smaller } = useShareBreakpoints()
  const xs = smaller('sm')
  const grid = computed(() => {
    const grid = {
      xxl: xxl.value,
      xl: xl.value,
      lg: lg.value,
      md: md.value,
      sm: sm.value,
      xs: xs.value,
    }
    return Object.keys(grid).find((key) => grid[key]) || 'span'
  })

  const gridProps = computed(() => {
    if (typeof column.value === 'number') {
      return { span: getColumn(column.value), gutter: unref(gutter) }
    }

    return { gutter: unref(gutter), span: getColumn(column.value[grid.value]) || 6 }
  })

  return {
    gridProps,
    grid,
  }
}
