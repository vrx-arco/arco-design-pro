import { onBeforeUnmount } from 'vue'

export interface IUseAbortController {
  onabort?: () => void
}
export function useAbortController(options?: IUseAbortController) {
  const supportAbort = typeof AbortController === 'function'
  let contoller: AbortController | null = null

  const abort = () => {
    // not support AbortController
    if (!supportAbort) {
      return
    }
    contoller?.abort()
    contoller = new AbortController()
    if (options?.onabort) {
      contoller.signal.onabort = options.onabort
    }
  }

  abort()

  onBeforeUnmount(() => {
    contoller?.abort()
    contoller = null
  })

  return {
    abort,
    get signal() {
      return contoller?.signal
    },
  }
}
