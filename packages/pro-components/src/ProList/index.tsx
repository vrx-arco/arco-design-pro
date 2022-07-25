import { defineComponent, ref } from 'vue'
import { bool, number, object, oneOf, string } from 'vue-types'
import { List } from '@arco-design/web-vue'
import { style } from './style'
import { useElementSize } from '@vueuse/core'
import { getByPath } from '@vill-v/path-prop'
import '@arco-design/web-vue/es/list/style'
import { ProPagination } from '../ProPagination'
import { proPaginationProps } from '../ProPagination/props'

export const ProList = defineComponent({
  name: 'vrx-arco-pro-list',
  props: {
    ...proPaginationProps(),
    size: oneOf(['small', 'medium', 'large'] as const).def('medium'),
    bordered: bool().def(true),
    split: bool().def(true),
    loading: bool().def(false),
    hoverable: bool().def(false),
    bottomOffset: number().def(0),
    virtualList: bool().def(false),
    gridProps: object(),
    rowKey: string(),
    dataKey: string(),
  },
  emits: {
    /**
     * @zh 列表滚动时触发
     * @en Triggered when the list scrolls
     */
    scroll: () => true,
    /**
     * @zh 当列表到达底部时触发
     * @en Triggered when the list reaches the bottom
     */
    reachBottom: () => true,
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
  },
  setup: (props, { emit, slots }) => {
    const wrapperRef = ref()
    const { height } = useElementSize(wrapperRef)
    const { bemClass } = style()

    return () => {
      const {
        virtualList,
        size,
        bordered,
        split,
        loading,
        hoverable,
        bottomOffset,
        gridProps,
        rowKey,
        dataKey,
        data,
        pagination,
        paginationProps,
      } = props

      const isVirtualList = !gridProps && virtualList
      return (
        <ProPagination
          class={bemClass()}
          data={data}
          pagination={pagination}
          paginationProps={paginationProps}
          onCurrentChange={(current) => {
            emit('pageChange', current)
          }}
          onPageSizeChange={(pageSize) => {
            emit('pageSizeChange', pageSize)
          }}
          v-slots={{
            default: (list) => (
              <List
                class={bemClass()}
                ref={wrapperRef}
                data={list}
                bordered={bordered}
                split={split}
                hoverable={hoverable}
                loading={loading}
                bottomOffset={bottomOffset}
                virtualListProps={isVirtualList ? { height: height.value } : undefined}
                size={size}
                maxHeight={isVirtualList ? 0 : height.value}
                gridProps={gridProps}
                onScroll={() => emit('scroll')}
                onReachBottom={() => emit('reachBottom')}
                v-slots={{
                  item: ({ item, index }) => (
                    <List.Item key={rowKey ? getByPath(item, rowKey) : index}>
                      {slots.item?.({ item: dataKey ? getByPath(item, dataKey) : item, index })}
                    </List.Item>
                  ),
                }}
              />
            ),
          }}
        />
      )
    }
  },
})
