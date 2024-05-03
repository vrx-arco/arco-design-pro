---
name: 明暗主题切换
type: ProComponents
---

<script lang="ts" setup>
import {ThemeDarkLight} from '@vrx-arco/pro-components';
import {Card} from '@arco-design/web-vue';
import {useData} from 'vitepress';

const {isDark} = useData();

const handleDarkModeChange = (dark)=> {
   isDark.value = dark
}
</script>

# 明暗主题切换 ThemeDarkLight

针对 @arco-design/web-vue 进行暗色模式切换

<Card>
    <ThemeDarkLight @change="handleDarkModeChange"/>
</Card>

```vue
<script lang="ts" setup>
import { ThemeDarkLight } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <ThemeDarkLight />
  </Card>
</template>
```

## API

`<theme-dark-light>` Events

<EventTable>
<EventTableLine event="change" desc="暗色模式切换回调" attr="dark: boolean"/>
</EventTable>
