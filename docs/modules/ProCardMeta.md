---
type: ProComponents
name: 信息卡片
---

<script lang="ts" setup>
import {ProCardMeta} from '@vrx-arco/pro-components';
import  {Card,Avatar} from  '@arco-design/web-vue';
import {IconEdit, IconEye, IconMore, IconUser} from '@vrx-arco/icons-vue';
</script>

# 信息卡片 ProCardMeta

ant design 风格的 `card-meta`

<Card>
    <ProCardMeta  title="title" description="description">
        <template #avatar>
            <Avatar>whitekite</Avatar>
        </template>
        <template #actions>
            <IconUser />
            <IconEye />
            <IconEdit />
            <IconMore />
        </template>
    </ProCardMeta>
</Card>

```vue
<script lang="ts" setup>
import { ProCardMeta } from '@vrx-arco/pro-components'
import { Avatar, Card } from '@arco-design/web-vue'
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icons-vue'
</script>

<template>
  <Card>
    <ProCardMeta title="title" description="description">
      <template #avatar>
        <Avatar>whitekite</Avatar>
      </template>
      <template #actions>
        <IconUser />
        <IconEye />
        <IconEdit />
        <IconMore />
      </template>
    </ProCardMeta>
  </Card>
</template>
```

## API

`<pro-card-meta>` Props

<ApiTable>
    <ApiTableLine prop="title" desc="标题" type="string | VNode" default="-" />
    <ApiTableLine prop="avatar" desc="头像" type="VNode" default="-" />
    <ApiTableLine prop="description" desc="描述" type="string | VNode" default="-" />
    <ApiTableLine prop="actions" desc="操作按钮" type="VNode[]" default="-" />
</ApiTable>

`<pro-card-meta>` Slots

<SlotTable>
    <SlotTableLine slot="title" desc="标题" attr="-" />
    <SlotTableLine slot="avatar" desc="头像" attr="-" />
    <SlotTableLine slot="description" desc="描述" attr="-" />
    <SlotTableLine slot="actions" desc="操作按钮" attr="()=>VNode[]" />
</SlotTable>
