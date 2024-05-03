---
name: 分割线间距
type: ProComponents
---

<script setup lang="ts">
import {SpaceDivider} from '@vrx-arco/pro-components';
import {Card,Button,Space} from '@arco-design/web-vue';
</script>

# 分割线间距 SpaceDivider

灵感来自 [`<Space/>`](https://arco.design/vue/component/space)
组件，修改间距为 [`<Divider/>`](https://arco.design/vue/component/divider) 组件

<Card>
    <SpaceDivider>
      <Button>确认</Button>
      <Button>删除</Button>
      <Button>修改</Button>
    </SpaceDivider>
  </Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <SpaceDivider>
      <Button>确认</Button>
      <Button>删除</Button>
      <Button>修改</Button>
    </SpaceDivider>
  </Card>
</template>
```

## 纵向布局

<Card>
    <SpaceDivider direction="vertical">
      <Button>确认</Button>
      <Button>删除</Button>
      <Button>修改</Button>
    </SpaceDivider>
</Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <SpaceDivider direction="vertical">
      <Button>确认</Button>
      <Button>删除</Button>
      <Button>修改</Button>
    </SpaceDivider>
  </Card>
</template>
```

## 占满

<Card>
    <SpaceDivider direction="vertical" fill>
      <Button type="primary" long>确认</Button>
      <Button type="primary" long>删除</Button>
      <Button type="primary" long>修改</Button>
    </SpaceDivider>
</Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <SpaceDivider direction="vertical" fill>
      <Button type="primary" long>
        确认
      </Button>
      <Button type="primary" long>
        删除
      </Button>
      <Button type="primary" long>
        修改
      </Button>
    </SpaceDivider>
  </Card>
</template>
```

## 调整间距大小与分割线宽度

<Card>
    <SpaceDivider :size="5" :gap="5">
      <Button type="primary" long>确认</Button>
      <Button type="primary" long>删除</Button>
      <Button type="primary" long>修改</Button>
    </SpaceDivider>
</Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <SpaceDivider :size="5" :gap="5">
      <Button type="primary" long>
        确认
      </Button>
      <Button type="primary" long>
        删除
      </Button>
      <Button type="primary" long>
        修改
      </Button>
    </SpaceDivider>
  </Card>
</template>
```

## 不同类型的分割线

<Card>
    <Space>
      <SpaceDivider direction="vertical" fill type="dashed">
        <Button type="primary" long>确认</Button>
        <Button type="primary" long>删除</Button>
        <Button type="primary" long>修改</Button>
      </SpaceDivider>
      <SpaceDivider direction="vertical" fill type="dotted">
        <Button type="primary" long>确认</Button>
        <Button type="primary" long>删除</Button>
        <Button type="primary" long>修改</Button>
      </SpaceDivider>
      <SpaceDivider direction="vertical" fill type="double">
        <Button type="primary" long>确认</Button>
        <Button type="primary" long>删除</Button>
        <Button type="primary" long>修改</Button>
      </SpaceDivider>
    </Space>
  </Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card, Space } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <Space>
      <SpaceDivider direction="vertical" fill type="dashed">
        <Button type="primary" long>
          确认
        </Button>
        <Button type="primary" long>
          删除
        </Button>
        <Button type="primary" long>
          修改
        </Button>
      </SpaceDivider>
      <SpaceDivider direction="vertical" fill type="dotted">
        <Button type="primary" long>
          确认
        </Button>
        <Button type="primary" long>
          删除
        </Button>
        <Button type="primary" long>
          修改
        </Button>
      </SpaceDivider>
      <SpaceDivider direction="vertical" fill type="double">
        <Button type="primary" long>
          确认
        </Button>
        <Button type="primary" long>
          删除
        </Button>
        <Button type="primary" long>
          修改
        </Button>
      </SpaceDivider>
    </Space>
  </Card>
</template>
```

## 不同对齐方向

<Card>
    <Space wrap>
      <Card title="end" :bordered="false">
        <SpaceDivider align="end">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="baseline" :bordered="false">
        <SpaceDivider align="baseline">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="start" :bordered="false">
        <SpaceDivider align="start">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="center" :bordered="false">
        <SpaceDivider align="center">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
    </Space>
  </Card>

```vue
<script lang="ts" setup>
import { SpaceDivider } from '@vrx-arco/pro-components'
import { Button, Card, Space } from '@arco-design/web-vue'
</script>

<template>
  <Card>
    <Space wrap>
      <Card title="end" :bordered="false">
        <SpaceDivider align="end">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="baseline" :bordered="false">
        <SpaceDivider align="baseline">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="start" :bordered="false">
        <SpaceDivider align="start">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
      <Card title="center" :bordered="false">
        <SpaceDivider align="center">
          <Button>确认</Button>
          <Button>删除</Button>
          <Button>修改</Button>
        </SpaceDivider>
      </Card>
    </Space>
  </Card>
</template>
```

## API

`<space-divider>` Props

<ApiTable>
    <ApiTableLine prop="direction" desc="布局方向" type="'vertical'|'horizontal'"  default="'horizontal'" />
    <ApiTableLine prop="align" desc="对齐方向" type="'start'｜ 'end'｜ 'center'｜'baseline'" default="'center'"  />
    <ApiTableLine prop="fill" desc="是否占满" type="boolean" default="false"  />
    <ApiTableLine prop="size" desc="分割线宽度" type="number" default=""  />
    <ApiTableLine prop="gap" desc="分割线间距" type="number｜string" default=""  />
</ApiTable>

### 帮助方法(实验性)

```vue
<script lang="ts" setup>
import { useEmptyComponentInject } from '@vrx-arco/use'
import { computed } from 'vue'

const props = defineProps({
  // 某种权限
  auth: {
    type: String,
  },
})
const { empty } = useEmptyComponentInject()

const hasAuth = computed(() => {
  // 某种权限业务为管理员才能渲染该组件内容，可将 empty 设置为 true ,<SpaceDivider/> 将不会渲染该组件
  const hasAuth = props.auth === 'admin'
  empty.value = !hasAuth
  return hasAuth
})
</script>
```
