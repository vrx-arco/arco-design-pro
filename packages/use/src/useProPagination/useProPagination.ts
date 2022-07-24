import { PaginationProps } from '@arco-design/web-vue'
import { computed, Ref } from 'vue'
import { useAutoProPagination } from './useAutoProPagination'

export const useProPagination = (
  data: Ref<any[]>,
  pagination: Ref<boolean | PaginationProps | undefined>
) => {
  if (pagination.value === true) {
    return useAutoProPagination(data, pagination)
  }

  const total = computed(() => (pagination.value as PaginationProps)?.total)

  const current = computed<number>({
    get: () => (pagination.value as PaginationProps)?.current || 1,
    set: (value) => {
      if (typeof pagination.value !== 'object') {
        return
      }
      ;(pagination.value as PaginationProps).current = value
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
