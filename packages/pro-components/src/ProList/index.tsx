import { computed, defineComponent, ref, toRef } from 'vue'
import { array, bool, number, object, oneOf, oneOfType, string } from 'vue-types'
import { List, PaginationProps } from '@arco-design/web-vue'
import { style } from './style'
import { useElementSize } from '@vueuse/core'
import { getByPath } from '@vill-v/path-prop'
import '@arco-design/web-vue/es/list/style'

export const ProList = defineComponent({
  name: 'vrx-arco-pro-list',
  props: {
    data: array().def([]),
    pagination: oneOfType([bool(), object<PaginationProps>()]),
    size: oneOf(['small', 'medium', 'large'] as const).def('medium'),
    bordered: bool().def(true),
    split: bool().def(true),
    loading: bool().def(false),
    hoverable: bool().def(false),
    scroll: bool().def(false),
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
    const data = toRef(props, 'data')
    const _pagination = ref({ current: 1, pageSize: 10 })
    const pagination = computed(() =>
      props.pagination === true ? _pagination.value : props.pagination || {}
    )

    const renderList = () => {
      const {
        scroll,
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
      } = props

      const paginationHeight = pagination.value ? height.value - 55 : height.value
      return (
        <List
          class={bemClass()}
          data={data.value}
          bordered={bordered}
          split={split}
          hoverable={hoverable}
          loading={loading}
          bottomOffset={bottomOffset}
          virtualListProps={!gridProps && virtualList ? { height: paginationHeight } : undefined}
          size={size}
          maxHeight={scroll ? paginationHeight : 0}
          gridProps={gridProps}
          paginationProps={
            pagination.value
              ? {
                  showJumper: true,
                  showMore: true,
                  showPageSize: true,
                  showTotal: true,
                  total: data.value.length,
                  ...pagination.value,
                }
              : undefined
          }
          onPageChange={(current) => {
            pagination.value.current = current
            emit('pageChange', current)
          }}
          onPageSizeChange={(pageSize) => {
            pagination.value.pageSize = pageSize
            emit('pageSizeChange', pageSize)
          }}
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
      )
    }

    return () => {
      const { scroll, virtualList } = props

      return scroll || virtualList ? (
        <div class={bemClass()} ref={wrapperRef}>
          {renderList()}
        </div>
      ) : (
        renderList()
      )
    }
  },
})
