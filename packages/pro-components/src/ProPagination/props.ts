import { array, bool, object, oneOfType } from 'vue-types'
import { ProPaginationOption, PropPaginationProps } from '@vrx-arco/use'

export const proPaginationProps = () =>
  ({
    /**
     * 数据源
     */
    data: array().def([]),
    /**
     * 分页参数
     */
    pagination: oneOfType<true | ProPaginationOption>([bool(), object<ProPaginationOption>()]),
    /**
     * 分页组件入参
     */
    paginationProps: object<PropPaginationProps>().def({}),
  } as const)
