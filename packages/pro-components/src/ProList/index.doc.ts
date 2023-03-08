import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ProList',
  slots: {
    item: {
      desc: '列表当项渲染插槽',
    },
    header: {
      desc: '顶部插槽',
    },
  },
  events: {
    pageChange: {
      desc: '表格分页pageNum改变',
    },
    pageSizeChange: {
      desc: '表格pageSize改变',
    },
    scroll: {
      desc: '列表滚动时触发',
    },
    reachBottom: {
      desc: '当列表到达底部时触发',
    },
  },
  arco: ['List', 'Layout', 'Pagination'],
})
