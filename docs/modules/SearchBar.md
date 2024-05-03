---
name: 搜索工具栏
type: ProComponents
---

<script lang="ts" setup>
  import { Card, Input } from '@arco-design/web-vue'
  import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
  import { ref } from 'vue'
  const model = ref({ label1: undefined, label2: '', label3: '', label4: '' })
  const handleSearch = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 2000)
    })
  }
</script>

# 搜索工具栏 SearchBar

## 普通使用

<Card>
    <SearchBar :column="2" :model="model" @search="handleSearch">
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label1" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label2" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label3" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label4" />
      </SearchBarItem>
    </SearchBar>
  </Card>

```vue
<script lang="ts" setup>
import { Card, Input } from '@arco-design/web-vue'
import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
import { ref } from 'vue'

const model = ref({ label1: undefined, label2: '', label3: '', label4: '' })
function handleSearch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000)
  })
}
</script>

<template>
  <Card>
    <SearchBar :column="2" :model="model" @search="handleSearch">
      <SearchBarItem label="label">
        <Input v-model="model.label1" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label2" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label3" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label4" placeholder="placeholder" />
      </SearchBarItem>
    </SearchBar>
  </Card>
</template>
```

## 搜索时验证表单

<Card>
    <SearchBar :column="2" :model="model" valid-on-button-click @search="handleSearch">
      <SearchBarItem label="label" field="label1" required>
        <Input placeholder="placeholder" v-model="model.label1" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label2" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label3" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input placeholder="placeholder" v-model="model.label4" />
      </SearchBarItem>
    </SearchBar>
  </Card>

```vue
<script lang="ts" setup>
import { Card, Input } from '@arco-design/web-vue'
import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
import { ref } from 'vue'

const model = ref({ label1: undefined, label2: '', label3: '', label4: '' })
function handleSearch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000)
  })
}
</script>

<template>
  <Card>
    <SearchBar :column="2" :model="model" valid-on-button-click @search="handleSearch">
      <SearchBarItem label="label" field="label1" required>
        <Input v-model="model.label1" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label2" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label3" placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label">
        <Input v-model="model.label4" placeholder="placeholder" />
      </SearchBarItem>
    </SearchBar>
  </Card>
</template>
```

## 自动劫持子元素

劫持`<search-bar-item>` 第一个元素 自动绑定 `v-model`

<Card>
    <SearchBar auto-update :column="2" :model="model" reset-on-button-click valid-on-button-click @search="handleSearch">
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder"  />
      </SearchBarItem>
      <SearchBarItem label="label" field="label3">
        <Input placeholder="placeholder"  />
      </SearchBarItem>
      <SearchBarItem label="label" field="label4">
        <Input placeholder="placeholder"  />
      </SearchBarItem>
    </SearchBar>
  </Card>

```vue
<script lang="ts" setup>
import { Card, Input } from '@arco-design/web-vue'
import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
import { ref } from 'vue'

const model = ref({ label1: undefined, label2: '', label3: '', label4: '' })
function handleSearch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000)
  })
}
</script>

<template>
  <Card>
    <SearchBar
      auto-update
      :column="2"
      :model="model"
      reset-on-button-click
      valid-on-button-click
      @search="handleSearch"
    >
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label3">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label4">
        <Input placeholder="placeholder" />
      </SearchBarItem>
    </SearchBar>
  </Card>
</template>
```

## 隐藏重置按钮

<Card>
    <SearchBar auto-update :column="2" :model="model" hide-reset @search="handleSearch">
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder"  />
      </SearchBarItem>
    </SearchBar>
  </Card>

```vue
<script lang="ts" setup>
import { Card, Input } from '@arco-design/web-vue'
import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
import { ref } from 'vue'

const model = ref({ label1: undefined, label2: '', })
function handleSearch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 2000)
  })
}
</script>

<template>
  <Card>
    <SearchBar
      auto-update
      :column="2"
      :model="model"
      hide-reset
      @search="handleSearch"
    >
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder" />
      </SearchBarItem>
    </SearchBar>
  </Card>
</template>
```

## 隐藏操作栏

<Card>
    <SearchBar auto-update :column="2" :model="model" hide-action @search="handleSearch">
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder"  />
      </SearchBarItem>
    </SearchBar>
  </Card>

```vue
<script lang="ts" setup>
import { Card, Input } from '@arco-design/web-vue'
import { SearchBar, SearchBarItem } from '@vrx-arco/pro-components'
import { ref } from 'vue'

const model = ref({ label1: undefined, label2: '', })
</script>

<template>
  <Card>
    <SearchBar
      auto-update
      :column="2"
      :model="model"
      hide-action
    >
      <SearchBarItem label="label" field="label1">
        <Input placeholder="placeholder" />
      </SearchBarItem>
      <SearchBarItem label="label" field="label2">
        <Input placeholder="placeholder" />
      </SearchBarItem>
    </SearchBar>
  </Card>
</template>
```

## API

`<search-bar>` Props

<ApiTable>
    <ApiTableLine prop="model" desc="数据源 * 如需要使用自动重置，自动验证功能 该选项必填*" type="object" default="{}"/>
    <ApiTableLine prop="labelColProps" desc="label 的栅格布局" type="object" />
    <ApiTableLine prop="wrapperColProps" desc="content 的栅格布局" type="object" />
    <ApiTableLine prop="disabled" desc="禁用表单" type="boolean" />
    <ApiTableLine prop="rules" desc="表单验证规则" typeLink="https://arco.design/vue/component/form#API" type="参照 arco-design-vue" />
    <ApiTableLine prop="resetOnButtonClick" desc="点击重置按钮的时候根据 `model` 初始值自动重置表单"  type="boolean" default="false" />
    <ApiTableLine prop="validOnButtonClick" desc="点击搜索按钮的时候触发验证"  type="boolean" default="false" />
    <ApiTableLine prop="column" desc="表单栅格布局"  type="number｜CardListColumnGrid" default="{
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 4,
    }" />
    <ApiTableLine prop="autoUpdate" desc="劫持`<search-bar-item>` 第一个元素 自动绑定 `v-model`"  type="boolean" default="false" version="0.1.27" />
    <ApiTableLine prop="hideReset" desc="隐藏重置按钮"  type="boolean" default="false" version="1.3.2" />
    <ApiTableLine prop="hideAction" desc="隐藏操作栏"  type="boolean" default="false" version="1.3.2" />
</ApiTable>

`<search-bar>` Events

<EventTable>
    <EventTableLine event="search" desc="点击搜索按钮的回调，返回promise时，会自动显示加载动画" attr="(model: any) => Promise<any>"/>
    <EventTableLine event="reset" desc="点击重置按钮的回调，返回promise时，会自动显示加载动画" attr="(model: any) => Promise<any>"/>
</EventTable>

`<search-bar-item>` Props

<ApiTable>
    <ApiTableLine prop="gridProps" desc="对 `<search-bar>` column 属性进行覆盖" type="object" default="{}" />
    <ApiTableLine prop="autoUpdate" desc="对 `<search-bar>` autoUpdate 属性进行覆盖,或指定 v-model:arg arg的值"  type="boolean｜string" default="false" />
    <ApiTableLine prop="..." desc="arco-design-vue <form-item>的原有属性" typeLink="https://arco.design/vue/component/form#API" type="请参照 arco-design-vue" default="..." />
</ApiTable>
