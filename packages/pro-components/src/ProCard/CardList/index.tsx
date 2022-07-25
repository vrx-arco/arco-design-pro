import { computed, defineComponent } from 'vue'
import { Card } from '@arco-design/web-vue'
import { bool, number, object, oneOfType, string } from 'vue-types'
import { ProList } from '../../ProList'
import { useShareBreakpoints } from '@vrx-arco/use'
import '@arco-design/web-vue/es/card/style'
import { proPaginationProps } from '../../ProPagination/props'

export interface CardListColumnGrid {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export const CardList = defineComponent({
  name: 'vrx-arco-pro-card-list',
  props: {
    ...proPaginationProps(),
    bottomOffset: number().def(0),
    rowKey: string(),
    dataKey: string(),
    loading: bool().def(false),
    column: oneOfType([number(), object<CardListColumnGrid>()]).def({
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 4,
    }),
    gutter: number().def(0),
  },
  emits: {
    /**
     * @zh 表格分页发生改变时触发
     * @en Triggered when the table pagination changes
     * @param {number} page
     */
    // @ts-ignore
    pageChange: (page: number) => true,
    /**
     * @zh 表格每页数据数量发生改变时触发
     * @en Triggered when the number of data per page of the table changes
     * @param {number} pageSize
     */
    // @ts-ignore
    pageSizeChange: (pageSize: number) => true,
    // @ts-ignore
    itemClick: (item: any, index: number) => true,
  },
  setup: (props, { emit, slots }) => {
    const getColumn = (column: number) => Math.ceil(24 / column)
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
      const { gutter, column } = props
      if (typeof column === 'number') {
        return { span: getColumn(column), gutter }
      }
      return { gutter, span: getColumn(column[grid.value]) || 6 }
    })

    return () => {
      const { pagination, paginationProps, data, rowKey, bottomOffset, loading, dataKey } = props

      return (
        <ProList
          data={data}
          bordered={false}
          split={false}
          pagination={pagination}
          paginationProps={paginationProps}
          onPageChange={(current) => {
            emit('pageChange', current)
          }}
          onPageSizeChange={(pageSize) => {
            emit('pageSizeChange', pageSize)
          }}
          rowKey={rowKey}
          dataKey={dataKey}
          loading={loading}
          bottomOffset={bottomOffset}
          gridProps={gridProps.value}
          v-slots={{
            item: ({ item, index }) => (
              <Card hoverable {...{ onClick: () => emit('itemClick', item, index) }}>
                {slots.item?.({ item, index })}
              </Card>
            ),
          }}
        />
      )
    }
  },
})
