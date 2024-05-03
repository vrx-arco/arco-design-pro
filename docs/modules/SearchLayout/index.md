---
name: 搜索布局
type: ProComponents
---

<script setup lang="ts">
import {NormalSearchLayout,CardSearchLayout,TabsSearchLayout} from  './demo'
</script>

# SearchLayout

一个基础的上 搜索表单，下 内容展示布局

## 默认的分段上下布局

<NormalSearchLayout/>

```vue
<script lang="ts" setup>
import {
  ProCardList,
  ProCardMeta,
  SearchBar,
  SearchBarItem,
  SearchLayout,
  SearchLayoutContent,
  SearchLayoutHeader,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card, Input } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@arco-design/web-vue/dist/arco-vue-icon'
</script>

<template>
  <Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout title="搜索布局">
        <SearchLayoutHeader>
          <SearchBar :column="1">
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
          </SearchBar>
        </SearchLayoutHeader>
        <SearchLayoutContent>
          <ProCardList
            pagination
            :data="
              Array(10)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="1"
          >
            <template #header>
              <Button type="primary">
                新增
              </Button>
            </template>
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
                <template #actions>
                  <IconUser />
                  <IconEye />
                  <IconEdit />
                  <IconMore />
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

## 一体式卡片布局

<CardSearchLayout/>

```vue
<script setup lang="ts">
import {
  ProCardList,
  ProCardMeta,
  SearchBar,
  SearchBarItem,
  SearchLayout,
  SearchLayoutContent,
  SearchLayoutHeader,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card, Input } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icon'
</script>

<template>
  <Card>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout title="搜索布局" type="card">
        <SearchLayoutHeader>
          <SearchBar :column="1">
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
          </SearchBar>
        </SearchLayoutHeader>
        <SearchLayoutContent>
          <ProCardList
            pagination
            :data="
              Array(10)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="2"
          >
            <template #header>
              <Button type="primary">
                新增
              </Button>
            </template>
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
                <template #actions>
                  <IconUser />
                  <IconEye />
                  <IconEdit />
                  <IconMore />
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

## 提供 tabs 支持

<TabsSearchLayout/>

```vue
<script lang="ts" setup>
import {
  ProCardList,
  ProCardMeta,
  SearchBar,
  SearchBarItem,
  SearchLayout,
  SearchLayoutContent,
  SearchLayoutHeader,
} from '@vrx-arco/pro-components'
import { Avatar, Button, Card, Input, Radio, RadioGroup } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@arco-design/web-vue/dist/arco-vue-icon'
import { ref } from 'vue'

const type = ref('line')
</script>

<template>
  <Card>
    <div class="demo">
      <div class="demo-head">
        <RadioGroup v-model="type" type="button">
          <Radio value="line">
            Line
          </Radio>
          <Radio value="card">
            Card
          </Radio>
          <Radio value="card-gutter">
            Card Gutter
          </Radio>
          <Radio value="text">
            Text
          </Radio>
          <Radio value="rounded">
            Rounded
          </Radio>
          <Radio value="capsule">
            Capsule
          </Radio>
        </RadioGroup>
      </div>
      <SearchLayout class="demo-content" title="搜索布局" type="card">
        <SearchLayoutHeader>
          <SearchBar :column="1">
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
            <SearchBarItem label="label">
              <Input />
            </SearchBarItem>
          </SearchBar>
        </SearchLayoutHeader>
        <SearchLayoutContent
          :tabs="[
            { key: 'all', title: '全部' },
            { key: 'list', title: '列表' },
          ]"
          use-tabs
          :tabs-type="type"
        >
          <ProCardList
            pagination
            :data="
              Array(10)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="1"
          >
            <template #header>
              <Button type="primary">
                新增
              </Button>
            </template>
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <Avatar>{{ item }}</Avatar>
                </template>
                <template #actions>
                  <IconUser />
                  <IconEye />
                  <IconEdit />
                  <IconMore />
                </template>
              </ProCardMeta>
            </template>
          </ProCardList>
        </SearchLayoutContent>
      </SearchLayout>
    </div>
  </Card>
</template>

<style scoped>
.demo {
  height: 800px;
  background-color: var(--color-fill-2);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo-head {
  background-color: var(--color-bg-2);
  padding: 20px;
  margin-bottom: 10px;
}
.demo-content{
  min-height: 0;
  flex: 1;
}
</style>
```

## API

`<search-layout>` Props

<ApiTable>
    <ApiTableLine prop="type" desc="布局类型 normal- 分体式卡片 card - 一体式卡片" type="'card'｜'normal'"  default="'normal'" />
    <ApiTableLine prop="title" desc="标题" type="string" default="''"  />
</ApiTable>

`<search-layout-content>` Props

<ApiTable>
    <ApiTableLine prop="useTabs" desc="是否使用内置Tabs" type="boolean"  default="false" />
    <ApiTableLine prop="tabs" desc="tab 配置" type="SearchLayoutContentTab[]" default="[]"  />
    <ApiTableLine prop="tabsType" desc="tab类型" type="TabsType" default="[]"  />
</ApiTable>

`<search-layout-content>` Events

<EventTable>
    <EventTableLine event="tabChange" desc="内置tab切换事件" attr="(key: string | number) => void"/>
</EventTable>

`<search-layout-content>` Slots

<SlotTable>
    <SlotTableLine slot="tabExtra" desc="tab插槽" attr="" version="0.1.40"/>
</SlotTable>
