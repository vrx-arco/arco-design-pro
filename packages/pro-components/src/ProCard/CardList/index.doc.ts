import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ProCardList',
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
    rowKey: {
      type: 'string',
      desc: '等同于 v-for的 key，用于性能优化',
    },
    dataKey: {
      type: 'string',
      desc: '根据数据key值筛选每个卡片获取的数据，可传递类似 "res.data.data" 的路径字符串',
    },
    loading: {
      type: 'boolean',
      desc: '加载状态',
    },
    column: {
      type: 'number| CardListColumnGrid',
      desc: '一行显示的列数',
    },
    gutter: {
      type: 'number | [number, number]',
      desc: 'item的间距',
    },
  },
  slots: [
    {
      name: 'item',
      desc: '列表当项渲染插槽',
    },
    {
      name: 'header',
      desc: '顶部插槽',
    },
  ],
  events: [
    {
      name: 'pageChange',
      desc: '表格分页pageNum改变',
    },
    {
      name: 'pageSizeChange',
      desc: '表格pageSize改变',
    },
    {
      name: 'itemClick',
      desc: '卡片列表项被点击事件',
    },
  ],
  arco: ['Card', 'List', 'Layout', 'Pagination'],
})
