import { PaginationProps } from '@arco-design/web-vue'
import { Ref, computed } from 'vue'
import { useAutoProPagination } from './useAutoProPagination'
import { ProPaginationOption } from './types'

export const useProPagination = (
  data: Ref<any[]>,
  pagination: Ref<true | ProPaginationOption | undefined>,
  paginationProps: Ref<PaginationProps | undefined>
) => {
  if (pagination.value === true) {
    return useAutoProPagination(data, paginationProps)
  }

  const total = computed(() => (pagination.value as ProPaginationOption)?.total || 0)

  const current = computed<number>({
    get: () => (pagination.value as ProPaginationOption)?.pageNum || 1,
    set: (value) => {
      if (typeof pagination.value !== 'object') {
        return
      }
      ;(pagination.value as ProPaginationOption).pageNum = value
    },
  })

  const pageSize = computed<number>({
    get: () => (pagination.value as PaginationProps)?.pageSize || 10,
    set: (value) => {
      if (typeof pagination.value !== 'object') {
        return
      }
      ;(pagination.value as PaginationProps).pageSize = value
    },
  })

  const pageChange = (value: number) => {
    current.value = value
  }

  const pageSizeChange = (value: number) => {
    current.value = 1
    pageSize.value = value
  }

  return {
    total,
    current,
    pageSize,
    pageChange,
    pageSizeChange,
    data,
  }
}
