import { ref } from 'vue'
import { EditFormDialogInstance } from './EditFormDialog'

export const useEditFormDialog = <T extends Record<string, any> = any>() => {
  const formRef = ref<EditFormDialogInstance>()
  const open = (value?: T) => {
    formRef.value?.open(value)
  }
  return [formRef, open] as const
}
