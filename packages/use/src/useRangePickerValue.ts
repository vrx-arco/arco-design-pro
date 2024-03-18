import { type MaybeRefOrGetter, computed, toValue } from 'vue'

/**
 * 解决在使用 arco  RangePicker 向后端传递数据时常常要将数据处理成，以下形式的问题
 * 要将 ['2024-11-20 11:20:00','2024-11-20 21:20:00'] 数据转换为 {startTime:'2024-11-20 11:20:00',endTime:'2024-11-20 21:20:00'}
 *
 * ```vue
 * <script setup lang="ts">
 *  import { useRangePickerObjectValue } from '@vrx-arco/use'
 *  const model = ref({})
 *  const rangePickerValue = useRangePickerObjectValue(model,'startTime','endTime')
 *
 *  const handleSubmit = ()=>{
 *      // 提交 以下格式数据{startTime:'2024-11-20 11:20:00',endTime:'2024-11-20 21:20:00'}
 *      fetch('/api/submit',{method:'post',body:JSON.stringify(model.value)})
 *  }
 * </script>
 * <template>
 *  <AForm :model="model" @submit="handleSubmit">
 *    <AFormItem>
 *      <ARangePicker v-model="rangePickerValue" />
 *    </AFormItem>
 *  </AForm>
 * </template>
 * ```
 * *** 暂时不要将这个方法用到生产，现在还是半成品，可能会更改 ***
 * @inner
 */
export const useRangePickerObjectValue = <Modal extends Record<string, any>>(
  model: MaybeRefOrGetter<Modal>,
  startKey: keyof Modal,
  endKey: keyof Modal
) => {
  return computed<(string | number | Date)[]>({
    get: () => {
      const data = toValue(model)
      const start = data[startKey]
      const end = data[endKey]
      if (start && end) {
        return [start, end]
      }
      return []
    },
    set: (list = []) => {
      const data = toValue(model)
      // @ts-expect-error
      data[startKey] = list[0]
      // @ts-expect-error
      data[endKey] = list[1]
    },
  })
}
