import { PropType, computed, defineComponent, ref } from 'vue'
import { List } from '@arco-design/web-vue'
import { useElementSize } from '@vueuse/core'
import { getByPath } from '@vill-v/path-prop'
import { style } from '../style/var'
import { ProPagination } from '../ProPagination'
import { proPaginationProps } from '../ProPagination/props'

export const ProList = defineComponent({
  name: 'vrx-arco-pro-list',
  props: {
    ...proPaginationProps(),
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium',
    },
    /**
     * 是否显示边框
     */
    bordered: { type: Boolean, default: true },
    /**
     * 是否显示分割线
     */
    split: { type: Boolean, default: true },
    /**
     * 加载状态
     */
    loading: { type: Boolean, default: false },
    /**
     * 列表项是否有反馈
     */
    hoverable: { type: Boolean, default: false },
    /**
     * 距离底部多少时触发触底事件
     */
    bottomOffset: { type: Number, default: 0 },
    /**
     * 是否开启虚拟列表，需保证gridProps选项未使用
     */
    virtualList: { type: Boolean, default: false },
    /**
     * 栅格布局配置
     */
    gridProps: Object,
    /**
     * 等同于 v-for的 key，用于性能优化
     */
    rowKey: String,
    /**
     * 根据数据key值筛选每个卡片获取的数据，可传递类似 "res.data.data" 的路径字符串
     */
    dataKey: String,
    /**
     * 列表的最大高度受控
     */
    maxHeight: Number,
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pageChange: (page: number) => true,
    /**
     * @zh 表格每页数据数量发生改变时触发
     * @en Triggered when the number of data per page of the table changes
     * @param {number} pageSize
     */
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pageSizeChange: (pageSize: number) => true,
  },
  setup: (props, { emit, slots }) => {
    const wrapperRef = ref()
    const { height } = useElementSize(wrapperRef)
    const { bemClass } = style('pro-list')

    const maxHeight = computed(() => props.maxHeight ?? height.value)

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
                virtualListProps={isVirtualList ? { height: maxHeight.value } : undefined}
                size={size}
                maxHeight={isVirtualList ? 0 : maxHeight.value}
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
