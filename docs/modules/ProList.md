---
name: 列表
type: ProComponents
---

<script lang="ts" setup>
    import {ProList} from '@vrx-arco/pro-components'
    import {Card} from '@arco-design/web-vue'
</script>

# 列表 ProList

基于[ProPagination](/modules/ProPagination) 封装的带分页列表

<Card>
    <ProList
      style="height: 500px"
      pagination
      :data="
        Array(30)
          .fill(1)
          .map((_, index) => index + 1)
      "
    >
      <template #item="{ item }">
        {{ item }}
      </template>
    </ProList>
  </Card>

```vue
<script lang="ts" setup>
import { ProList } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <ProList
      style="height: 500px"
      pagination
      :data="
        Array(30)
          .fill(1)
          .map((_, index) => index + 1)
      "
    >
      <template #item="{ item }">
        {{ item }}
      </template>
    </ProList>
  </Card>
</template>
```

## API

`<pro-list>` Props

<ApiTable>
    <ApiTableLine prop="data" desc="数据源" type="array"  default="[]" />
    <ApiTableLine prop="pagination" desc="分页参数 false或不使用该参数将隐藏分页组件" type="true|ProPaginationOption" default="{pageNum:1,pageSize:10,total:0}"  />
    <ApiTableLine prop="paginationProps" desc="分页组件入参" type="请参考arco-design-vue pagination API" typeLink="https://arco.design/vue/component/pagination#API" default="{}"  />
    <ApiTableLine prop="bordered" desc="是否显示边框" type="boolean"  default="true"  />
    <ApiTableLine prop="split" desc="是否显示分割线" type="boolean"  default="true"  />
    <ApiTableLine prop="loading" desc="列表加载状态" type="boolean"  default="false"  />
    <ApiTableLine prop="hoverable" desc="列表项是否有反馈" type="boolean"  default="false"  />
    <ApiTableLine prop="bottomOffset" desc="距离底部多少时触发触底事件" type="number"  default="0"  />
    <ApiTableLine prop="virtualList" desc="是否开启虚拟列表，需保证gridProps选项未使用" type="boolean"  default="false"  />
    <ApiTableLine prop="gridProps" desc="栅格布局配置" type="object"  default="-"  />
    <ApiTableLine prop="rowKey" desc="等同于 v-for的 key，用于性能优化" type="string"  default="-"  />
    <ApiTableLine prop="dataKey" desc="根据数据key值筛选每个列表项获取的数据，可传递类似 'res.data.data' 的路径字符串" type="string"  default="-"  />
    <ApiTableLine prop="maxHeight" desc="受控的列表的最大高度" type="number"  default="-"  />
</ApiTable>

`<pro-list>` Events

<EventTable>
    <EventTableLine event="scroll" desc="列表滚动时触发"/>
    <EventTableLine event="reachBottom" desc="当列表到达底部时触发"/>
    <EventTableLine event="pageChange" desc="表格分页发生改变时触发" attr="(page: number) =>void"/>
    <EventTableLine event="pageSizeChange" desc="表格每页数据数量发生改变时触发" attr="(pageSize: number) =>void"/>
</EventTable>

`<pro-list>` Slots

<SlotTable>
    <SlotTableLine slot="item" desc="列表当项渲染插槽" attr="{item:any,index:number}" />
</SlotTable>
