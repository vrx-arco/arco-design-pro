---
name: 分页容器
type: ProComponents
---

<script lang="ts" setup>
  import { ProPagination } from '@vrx-arco/pro-components'
  import { Card, List, ListItem } from '@arco-design/web-vue'
  import { usePaginatedData } from '@vrx/core'

  const { pagination, pageChange, pageSizeChange, list } = usePaginatedData(
    ({ pagination }) =>
      Promise.resolve({
        data: Array(20)
          .fill(1)
          .map((_, index) => pagination.pageNum * (index + 1)),
        total: 20,
      }),
    { immediate: true, initData: () => [], path: 'data', totalPath: 'total' }
  )
</script>

# 分页容器 ProPagination

集成分页组件的布局容器

## 自动分页模式

根据传入数据源，进行本地分页

<Card>
    <ProPagination
      style="height: 500px"
      pagination
      :data="
        Array(30)
          .fill(1)
          .map((_, index) => index + 1)
      "
    >
      <template #default="list">
        <List :data="list">
          <template #item="{ item }">
            <ListItem>{{ item }}</ListItem>
          </template>
        </List>
      </template>
    </ProPagination>
  </Card>

```vue
<script lang="ts" setup>
import { ProPagination } from '@vrx-arco/pro-components'
import { Card, List, ListItem } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <ProPagination
      style="height: 500px"
      pagination
      :data="
        Array(30)
          .fill(1)
          .map((_, index) => index + 1)
      "
    >
      <template #default="list">
        <List :data="list">
          <template #item="{ item }">
            <ListItem>{{ item }}</ListItem>
          </template>
        </List>
      </template>
    </ProPagination>
  </Card>
</template>
```

## 受控分页模式

<Card>
    <ProPagination
      style="height: 500px"
      :pagination="pagination"
      :data="list"
      @currentChange="pageChange"
      @pageSizeChange="pageSizeChange"
    >
      <template #default="list">
        <List :data="list">
          <template #item="{ item }">
            <ListItem>{{ item }}</ListItem>
          </template>
        </List>
      </template>
    </ProPagination>
  </Card>

```vue
<script lang="ts" setup>
import { ProPagination } from '@vrx-arco/pro-components'
import { Card, List, ListItem } from '@arco-design/web-vue'
import { usePaginatedData } from '@vrx/core'

const { pagination, pageChange, pageSizeChange, list } = usePaginatedData(
  ({ pagination }) =>
    Promise.resolve({
      data: Array(20)
        .fill(1)
        .map((_, index) => pagination.pageNum * (index + 1)),
      total: 20,
    }),
  { immediate: true, initData: () => [], path: 'data', totalPath: 'total' }
)
</script>

<template>
  <Card>
    <ProPagination
      style="height: 500px"
      :pagination="pagination"
      :data="list"
      @currentChange="pageChange"
      @pageSizeChange="pageSizeChange"
    >
      <template #default="list">
        <List :data="list">
          <template #item="{ item }">
            <ListItem>{{ item }}</ListItem>
          </template>
        </List>
      </template>
    </ProPagination>
  </Card>
</template>
```

## API

`<pro-pagination>` Props

<ApiTable>
    <ApiTableLine prop="data" desc="数据源" type="array"  default="[]" />
    <ApiTableLine prop="pagination" desc="分页参数 false或不使用该参数将隐藏分页组件" type="true|ProPaginationOption" default="{pageNum:1,pageSize:10,total:0}"  />
    <ApiTableLine prop="paginationProps" desc="分页组件入参" type="请参考arco-design-vue pagination API" typeLink="https://arco.design/vue/component/pagination#API" default="{}"  />
</ApiTable>

`<pro-pagination>` Events

<EventTable>
    <EventTableLine event="currentChange" desc="分页页码发生变化" attr="(current: number) => any" />
    <EventTableLine event="pageSizeChange" desc="分页每页数量发生变化" attr="(pageSize: number) => any" />
</EventTable>

`<pro-pagination>` Slots

<SlotTable>
    <SlotTableLine slot="default" desc="默认插槽，传递处理后的分页数据" attr="(list:any[])=>any" />
</SlotTable>
