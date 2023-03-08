import { defineComponent, toRef } from 'vue'
import { Card } from '@arco-design/web-vue'
import { array, bool, number, object, oneOfType, string } from 'vue-types'
import { ProList } from '../../ProList'
import { useGrid } from '@vrx-arco/use'
import { proPaginationProps } from '../../ProPagination/props'

export interface CardListColumnGrid {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export const ProCardList = defineComponent({
  name: 'vrx-arco-pro-card-list',
  props: {
    ...proPaginationProps(),
    bottomOffset: number().def(0),
    /**
     * 等同于 v-for的 key，用于性能优化
     */
    rowKey: string(),
    /**
     * 根据数据key值筛选每个卡片获取的数据，可传递类似 "res.data.data" 的路径字符串
     */
    dataKey: string(),
    /**
     * 加载状态
     */
    loading: bool().def(false),
    /**
     * 一行显示的列数
     */
    column: oneOfType([number(), object<CardListColumnGrid>()]).def({
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 4,
    }),
    /**
     * item的间距
     */
    gutter: oneOfType<number | [number, number]>([number(), array<number>()]).def(0),
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
    const column = toRef(props, 'column')
    const gutter = toRef(props, 'gutter')
    const { gridProps } = useGrid(true, column, gutter)

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
            header: slots.header,
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
