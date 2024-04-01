import { TreeFieldNames, TreeNodeData, TreeSelectInstance } from '@arco-design/web-vue'
import { MaybeRef } from '@vueuse/core'
import { toValue } from 'vue'

export interface CreateTreeSelectFilterNodeReturn {
  fieldNames: MaybeRef<TreeFieldNames>
  filterTreeNode: TreeSelectInstance['filterTreeNode']
}

/**
 * 解决arco tree-select反人类的默认筛选 key 的帮助方法
 * 简洁的封装 tree-select 筛选 title 的逻辑
 *
 * ```vue
 * <script setup lang="ts">
 *  import { createTreeSelectFilterNode } from '@vrx-arco/use'
 *  const treeFilter = createTreeSelectFilterNode({title:'name'})
 * </script>
 * <template>
 *  <ATeeSelect v-bind="treeFilter"/>
 * </template>
 * ```
 * *** 暂时不要将这个方法用到生产，现在还是半成品，可能会更改 ***
 * @inner
 */
export const createTreeSelectFilterNode = (
  fieldNames: MaybeRef<TreeFieldNames>
): CreateTreeSelectFilterNodeReturn => {
  const filterTreeNode: CreateTreeSelectFilterNodeReturn['filterTreeNode'] = (
    searchKey: string,
    nodeData: TreeNodeData
  ) => {
    if (!searchKey) {
      return true
    }
    const _fieldNames = toValue(fieldNames)
    const value = nodeData[_fieldNames.title || 'title']
    return String(value).includes(searchKey)
  }
  return {
    fieldNames,
    filterTreeNode,
  }
}
