import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ProList',
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
    bordered: {
      type: 'boolean',
      desc: '是否显示边框',
    },
    split: {
      type: 'boolean',
      desc: '是否显示分割线',
    },
    hoverable: {
      type: 'boolean',
      desc: '列表项是否有反馈',
    },
    bottomOffset: {
      type: 'number',
      desc: '距离底部多少时触发触底事件',
    },
    virtualList: {
      type: 'boolean',
      desc: '是否开启虚拟列表，需保证gridProps选项未使用',
    },
    gridProps: {
      type: 'object',
      desc: '栅格布局配置',
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
      name: 'scroll',
      desc: '列表滚动时触发',
    },
    {
      name: 'reachBottom',
      desc: '当列表到达底部时触发',
    },
  ],
  arco: ['List', 'Layout', 'Pagination'],
})
