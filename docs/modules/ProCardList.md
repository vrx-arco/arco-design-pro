---
type: ProComponents
name: 卡片列表
---

<script lang="ts" setup>
import {
    ProCardList,
    ProCardMeta,
    SearchLayout,
    SearchLayoutContent,
  } from '@vrx-arco/pro-components';
  import { Card, Button, Avatar } from '@arco-design/web-vue';
  import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icons-vue';
</script>

# 卡片列表 ProCardList

栅格式卡片列表

## 作为普通列表使用

<Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="2"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>

```vue
<script lang="ts" setup>
import {
  ProCardList,
  ProCardMeta,
  SearchLayout,
  SearchLayoutContent,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icons-vue'
</script>

<template>
  <Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="2"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>
</template>
```

## 使用分页组件

<Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            pagination
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="2"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>

```vue
<script lang="ts" setup>
import {
  ProCardList,
  ProCardMeta,
  SearchLayout,
  SearchLayoutContent,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icons-vue'
</script>

<template>
  <Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            pagination
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="2"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>
</template>
```

## 栅格布局

<Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 2,
            }"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>

```vue
<script lang="ts" setup>
import {
  ProCardList,
  ProCardMeta,
  SearchLayout,
  SearchLayoutContent,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icons-vue'
</script>

<template>
  <Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout>
        <SearchLayoutContent>
          <ProCardList
            :data="
              Array(20)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
              xxl: 2,
            }"
          >
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>
</template>
```

## API

`<pro-card-list>` Props

<ApiTable>
    <ApiTableLine prop="data" desc="数据源" type="array"  default="[]" />
    <ApiTableLine prop="pagination" desc="分页参数" type="true|ProPaginationOption" default="{pageNum:1,pageSize:10,total:0}"  />
    <ApiTableLine prop="paginationProps" desc="分页组件入参" type="请参考arco-design-vue pagination API" typeLink="https://arco.design/vue/component/pagination#API" default="{}"  />
    <ApiTableLine prop="rowKey" desc="等同于 v-for的 key，用于性能优化" type="string"  default="-"  />
    <ApiTableLine prop="dataKey" desc="根据数据key值筛选每个卡片获取的数据，可传递类似 'res.data.data' 的路径字符串" type="string"  default="-"  />
    <ApiTableLine prop="loading" desc="加载状态" type="boolean"  default="false"  />
    <ApiTableLine prop="column" desc="一行显示的列数" type="number| CardListColumnGrid"  default="{
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 4,
    }"  />
    <ApiTableLine prop="gutter" desc="item的间距" type="number | [number, number]"  default="0"  />
    <ApiTableLine prop="maxHeight" desc="受控的列表的最大高度" type="number"  default="-"  />
</ApiTable>

`<pro-card-list>` Events

<EventTable>
    <EventTableLine event="pageChange" desc="表格分页pageNum改变" attr="(page: number) => void"/>
    <EventTableLine event="pageSizeChange" desc="表格pageSize改变" attr="(pageSize: number) => void"/>
    <EventTableLine event="itemClick" desc="卡片列表项被点击事件" attr="(item: any, index: number) => void"/>
</EventTable>

`<pro-card-list>` Slots

<SlotTable>
    <SlotTableLine slot="item" desc="列表当项渲染插槽" attr="{item:any,index:number}" />
</SlotTable>
