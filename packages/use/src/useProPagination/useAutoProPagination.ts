import { computed, Ref, ref } from 'vue'
import { PaginationProps } from '@arco-design/web-vue'

/**
 * 自动数据分页
 * @param originData
 * @param pagination
 */
export const useAutoProPagination = (
  originData: Ref<any[]>,
  pagination: Ref<boolean | PaginationProps | undefined>
) => {
  const defaultPageSize = computed(() => (pagination as PaginationProps)?.defaultPageSize || 10)

  const total = computed(() => originData.value.length)

  const current = ref(1)
  const pageSize = ref(defaultPageSize.value || 10)

  const getPaginationList = () => {
    const pageRange = [0, 0]
    pageRange[0] = (current.value - 1) * pageSize.value
    pageRange[1] = pageRange[0] + pageSize.value
    if (pageRange[1] > total.value) {
      pageRange[1] = total.value
    }

    return originData.value.slice(...pageRange)
  }

  const data = computed<any[]>(() => getPaginationList())

  const pageChange = (value: number) => {
    current.value = value
    getPaginationList()
  }

  const pageSizeChange = (value: number) => {
    current.value = 1
    pageSize.value = value
    getPaginationList()
  }

  return {
    data,
    total,
    current,
    pageSize,
    pageChange,
    pageSizeChange,
  }
}
