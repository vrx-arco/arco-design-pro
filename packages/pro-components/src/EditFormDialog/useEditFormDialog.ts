import { ref } from 'vue'

export const useEditFormDialog = () => {
  const formRef = ref()
  const open = (value?: Record<string, any>) => {
    formRef.value.open(value)
  }
  return [formRef, open] as const
}
