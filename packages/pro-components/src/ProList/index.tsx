import { defineComponent, ref } from 'vue'
import { bool, number, object, oneOf, string } from 'vue-types'
import { List } from '@arco-design/web-vue'
import { style } from './style'
import { useElementSize } from '@vueuse/core'
import { getByPath } from '@vill-v/path-prop'
import { ProPagination } from '../ProPagination'
import { proPaginationProps } from '../ProPagination/props'

export const ProList = defineComponent({
  name: 'vrx-arco-pro-list',
  props: {
    ...proPaginationProps(),
    size: oneOf(['small', 'medium', 'large'] as const).def('medium'),
    /**
     * 是否显示边框
     */
    bordered: bool().def(true),
    /**
     * 是否显示分割线
     */
    split: bool().def(true),
    /**
     * 加载状态
     */
    loading: bool().def(false),
    /**
     * 列表项是否有反馈
     */
    hoverable: bool().def(false),
    /**
     * 距离底部多少时触发触底事件
     */
    bottomOffset: number().def(0),
    /**
     * 是否开启虚拟列表，需保证gridProps选项未使用
     */
    virtualList: bool().def(false),
    /**
     * 栅格布局配置
     */
    gridProps: object(),
    /**
     * 等同于 v-for的 key，用于性能优化
     */
    rowKey: string(),
    /**
     * 根据数据key值筛选每个卡片获取的数据，可传递类似 "res.data.data" 的路径字符串
     */
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
            header: slots.header,
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
