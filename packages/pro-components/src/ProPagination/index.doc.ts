import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'ProPagination',
  slots: {
    default: {
      desc: '默认插槽，传递处理后的分页数据',
    },
    header: {
      desc: '顶部插槽',
    },
  },
  events: {
    currentChange: {
      desc: '表格分页pageNum改变',
    },
    pageSizeChange: {
      desc: '表格pageSize改变',
    },
  },
  arco: ['Layout', 'Pagination'],
})
