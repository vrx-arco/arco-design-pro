import { PaginationProps } from '@arco-design/web-vue'

export interface ProPaginationOption {
  total: number
  pageNum: number
  pageSize: number
}

export type PropPaginationProps = Omit<PaginationProps, 'total' | 'current' | 'pageSize'>
