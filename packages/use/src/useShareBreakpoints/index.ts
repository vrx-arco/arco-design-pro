/**
 *
 */
import { createSharedComposable, useBreakpoints } from '@vueuse/core'

export const useShareBreakpoints = () => {
  const _useShareBreakpoints = createSharedComposable(useBreakpoints)
  return _useShareBreakpoints({
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  })
}
