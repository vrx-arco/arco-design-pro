/**
 * `<EditFormDialog/>` 默认插槽类型
 */
export interface EditFormDialogSlot<T extends Record<string, any> = any> {
  /**
   * 表单数据
   */
  model: T
  /**
   * 是否是编辑状态
   */
  isEdit: boolean
}

/**
 * `<EditFormDialog/>` 提交请求参数
 */
export interface EditFormDialogConfirmOptions {
  singal?: AbortSignal
}
