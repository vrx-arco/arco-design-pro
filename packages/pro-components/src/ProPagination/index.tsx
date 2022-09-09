import { defineComponent, toRef } from 'vue'
import { Layout, Pagination } from '@arco-design/web-vue'
import { useProPagination } from '@vrx-arco/use'
import { style } from './style'
import { proPaginationProps } from './props'

export type { ProPaginationOption, PropPaginationProps } from '@vrx-arco/use'

export const ProPagination = defineComponent({
  name: 'vrx-arco-pro-pagination',
  props: proPaginationProps(),
  emits: {
    // @ts-ignore
    currentChange: (current: number) => true,
    // @ts-ignore
    pageSizeChange: (pageSize: number) => true,
  },
  setup: (props, { emit, slots }) => {
    const { bemClass } = style()

    const data = toRef(props, 'data')

    const pagination = toRef(props, 'pagination')

    const paginationProps = toRef(props, 'paginationProps')

    const {
      total,
      current,
      pageSize,
      data: list,
      pageChange,
      pageSizeChange,
    } = useProPagination(data, pagination, paginationProps)

    return () => {
      const slotsHeader = slots.header?.()
      return pagination.value ? (
        <Layout class={bemClass()}>
          {slotsHeader && <Layout.Header class={bemClass('__header')}>{slotsHeader}</Layout.Header>}
          <Layout.Content class={bemClass('__content')}>
            {slots.default?.(list.value)}
          </Layout.Content>
          <Layout.Footer class={bemClass('__footer')}>
            <Pagination
              class={bemClass('__pagination')}
              showTotal
              showPageSize
              showJumper
              {...paginationProps.value}
              total={total.value}
              current={current.value}
              pageSize={pageSize.value}
              onChange={(current) => {
                pageChange(current)
                emit('currentChange', current)
              }}
              onPageSizeChange={(pageSize) => {
                pageSizeChange(pageSize)
                emit('pageSizeChange', pageSize)
              }}
            />
          </Layout.Footer>
        </Layout>
      ) : (
        <div class={bemClass()}>{slots.default?.(list.value)}</div>
      )
    }
  },
})
