import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ProPagination',
  props: {
    data: {
      type: 'any[]',
      desc: '数据源',
    },
    pagination: {
      type: 'true|ProPaginationOption',
      desc: '分页参数',
    },
    paginationProps: {
      type: 'object',
      desc: '分页组件入参',
    },
  },
  slots: [
    {
      name: 'default',
      desc: '默认插槽，传递处理后的分页数据',
    },
    {
      name: 'header',
      desc: '顶部插槽',
    },
  ],
  events: [
    {
      name: 'currentChange',
      desc: '表格分页pageNum改变',
    },
    {
      name: 'pageSizeChange',
      desc: '表格pageSize改变',
    },
  ],
  arco: ['Layout', 'Pagination'],
})
