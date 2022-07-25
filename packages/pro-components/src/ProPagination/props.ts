import { array, bool, object, oneOfType } from 'vue-types'
import { ProPaginationOption, PropPaginationProps } from '@vrx-arco/use'

export const proPaginationProps = () => ({
  data: array().def([]),
  pagination: oneOfType<true | ProPaginationOption>([bool(), object<ProPaginationOption>()]),
  paginationProps: object<PropPaginationProps>().def({}),
})
