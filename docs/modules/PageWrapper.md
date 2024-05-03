---
type: ProLayout
name: 页面预设
---

# 页面预设 PageWrapper

为 [ProLayout](/modules/ProLayout) 默认插槽提供的页面预设

## 根据路由自动生成带面包屑的页面布局

<img src="/images/page-wrapper.png" alt="page-wrapper">

```vue
<script lang="ts" setup>
import { PageWrapper } from '@vrx-arco/pro-layout'
</script>

<template>
  <PageWrapper />
</template>
```

## API

`<page-wrapper>` Props

<ApiTable>
    <ApiTableLine prop="scrollbar" desc="是否在超出容器部分时开启虚拟滚动条" type="boolean" default="false" version="0.2.0"  />
</ApiTable>

`<page-wrapper>` Slots

<SlotTable>
    <SlotTableLine slot="default" desc="内容默认插槽"  />
</SlotTable>

## 提示

面包屑显示需要在路由配置信息中配置 `meta.title`

面包屑基于 `useRoute().matched` 生成
