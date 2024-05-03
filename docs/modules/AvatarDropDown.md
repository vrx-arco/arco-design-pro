---
name: 头像下拉框
type: ProComponents
---

<script setup lang="ts">
import {AvatarDropDown} from '@vrx-arco/pro-components';
import {Card} from '@arco-design/web-vue'
</script>

# 头像下拉框 AvatarDropDown

头像下拉框

<Card>
    <AvatarDropDown username="whitekite" :dropdown="[{ value: 'logout', title: '登出' }]"/>
</Card>

```vue
<script lang="ts" setup>
import { AvatarDropDown } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <AvatarDropDown username="whitekite" :dropdown="[{ value: 'logout', title: '登出' }]" />
  </Card>
</template>
```

## API

`<avatar-drop-down>` Props

<ApiTable>
    <ApiTableLine prop="username" desc="用户名" type="string"  default="''" />
    <ApiTableLine prop="dropdown" desc="下拉框选项" type="UserAvatarDropDownItem[]" default="[]"  />
</ApiTable>

`<avatar-drop-down>` Slots

<SlotTable>
    <SlotTableLine slot="default" desc="头像内部渲染插槽"  />
    <SlotTableLine slot="content" desc="自定义下拉框渲染插槽"  />
</SlotTable>

`<avatar-drop-down>` Events

<EventTable>
    <EventTableLine event="select" desc="下拉框选择事件" attr="select: string"  />
</EventTable>
