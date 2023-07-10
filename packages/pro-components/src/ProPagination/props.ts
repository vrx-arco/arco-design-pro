import { ProPaginationOption, PropPaginationProps } from '@vrx-arco/use'
import { PropType } from 'vue'

export const proPaginationProps = () =>
  ({
    /**
     * 数据源
     */
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    /**
     * 分页参数
     */
    pagination: [Boolean, Object] as PropType<ProPaginationOption | true>,
    /**
     * 分页组件入参
     */
    paginationProps: {
      type: Object as PropType<PropPaginationProps>,
      default: () => ({}),
    },
  }) as const
