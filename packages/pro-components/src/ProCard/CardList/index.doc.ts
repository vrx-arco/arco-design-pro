import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'ProCardList',
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
    itemClick: {
      desc: '卡片列表项被点击事件',
    },
  },
  arco: ['Card', 'List', 'Layout', 'Pagination'],
})
