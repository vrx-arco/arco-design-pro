import { TableColumnData, TableData } from '@arco-design/web-vue'

/**
 * `<ATableColumn/>` cell 插槽的类型帮助方法
 */
export interface ATableColumnCell<Record extends TableData = TableData> {
  record: Record
  column: TableColumnData
  rowIndex: number
}

export type { ATableColumnCell as TableColumnCell }
