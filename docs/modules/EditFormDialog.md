---
name: 新增/编辑表单
type: ProComponents
---

# 新增/编辑同构表单弹框 EditFormDialog

::: tip 提示

该组件的同构是面向新增/编辑时数据相同，且可以通过 id 判断新增/编辑数据的情况

:::

::: warning 警告

由于内部使用 [klona/json](https://www.npmjs.com/package/klona) 进行深拷贝

暂不支持 对数据内含有非 `json` 语法的数据进行拷贝

:::

<script setup lang="ts">
  import { EditFormDialog, useEditFormDialog } from '@vrx-arco/pro-components';
  import { Card, Button, Space, FormItem as AFormItem, Input as AInput } from '@arco-design/web-vue';
  import { ref } from 'vue';

  const [formRef, open] = useEditFormDialog();

  const [formRef1, open1] = useEditFormDialog();

  const editData = ref({ id: 'sss', title: 'sss' });

  const request = () =>
    new Promise((resolve) => {
      window.setTimeout(resolve, 2000)
    })
</script>

## `<Drawer/>` 模式

<Card>
    <Space>
      <Button @click="open()">新增</Button>
      <Button @click="open(editData)">编辑</Button>
    </Space>
    <EditFormDialog ref="formRef" id="id" title="表单" width="300px" @confirm="request">
      <template v-slot="{ model }">
        <AFormItem label="标题">
          <AInput v-model="model.title" />
        </AFormItem>
      </template>
    </EditFormDialog>
</Card>

```vue
<script setup lang="ts">
import { EditFormDialog, useEditFormDialog } from '@vrx-arco/pro-components'
import { FormItem as AFormItem, Input as AInput, Button, Card, Space } from '@arco-design/web-vue'
import { ref } from 'vue'

const [formRef, open] = useEditFormDialog()
const editData = ref({ id: 'sss', title: 'sss' })
function request() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 2000)
  })
}
</script>

<template>
  <Card>
    <Space>
      <Button @click="open()">
        新增
      </Button>
      <Button @click="open(editData)">
        编辑
      </Button>
    </Space>
    <EditFormDialog id="id" ref="formRef" title="表单" width="300px" @confirm="request">
      <template #default="{ model }">
        <AFormItem label="标题">
          <AInput v-model="model.title" />
        </AFormItem>
      </template>
    </EditFormDialog>
  </Card>
</template>
```

## `<Modal/>` 模式

<Card>
    <Space>
      <Button @click="open1()">新增</Button>
      <Button @click="open1(editData)">编辑</Button>
    </Space>
    <EditFormDialog type="modal" ref="formRef1" id="id" title="表单" width="600px" @confirm="request">
      <template v-slot="{ model }">
        <AFormItem label="标题">
          <AInput v-model="model.title" />
        </AFormItem>
      </template>
    </EditFormDialog>
  </Card>

```vue
<script setup lang="ts">
import { EditFormDialog, useEditFormDialog } from '@vrx-arco/pro-components'
import { FormItem as AFormItem, Input as AInput, Button, Card, Space } from '@arco-design/web-vue'
import { ref } from 'vue'

const [formRef, open] = useEditFormDialog()
const editData = ref({ id: 'sss', title: 'sss' })
function request() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 2000)
  })
}
</script>

<template>
  <Card>
    <Space>
      <Button @click="open()">
        新增
      </Button>
      <Button @click="open(editData)">
        编辑
      </Button>
    </Space>
    <EditFormDialog
      id="id"
      ref="formRef"
      type="modal"
      title="表单"
      width="600px"
      @confirm="request"
    >
      <template #default="{ model }">
        <AFormItem label="标题">
          <AInput v-model="model.title" />
        </AFormItem>
      </template>
    </EditFormDialog>
  </Card>
</template>
```

## API

`<EditFormDialog>` Props

<ApiTable>
    <ApiTableLine prop="type" desc="弹框类型--------    drawer-<Drawer/> modal-<Modal/>" type="'drawer'|'modal'"  default="'drawer'" />
    <ApiTableLine prop="id" desc="根据表单数据model[id] 是否存在，判断是否为编辑状态" type="string" default=""  />
    <ApiTableLine prop="model (v-model)" desc="外部获取表单数据" type="object" default=""  />
    <ApiTableLine prop="title" desc="标题-------------- 新增：新增${title};编辑：编辑${title};禁用：${title};" type="string" default=""  />
    <ApiTableLine prop="width" desc="弹框宽度" type="string" default=""  />
    <ApiTableLine prop="rules" desc="表单验证规则" type="object" default=""  />
    <ApiTableLine prop="disabled" desc="是否禁用表单" type="boolean" default="false"  />
    <ApiTableLine prop="unmountOnClose" desc="是否在弹框关闭时销毁整个表单" type="boolean" default="true"  />
    <ApiTableLine prop="add" desc="新增回调方法" type="(model: Record<string, any>,options: EditFormDialogConfirmOptions) => Promise<any>" default=""  />
    <ApiTableLine prop="edit" desc="编辑回调方法" type="(model: Record<string, any>,options: EditFormDialogConfirmOptions) => Promise<any>" default=""  />
</ApiTable>

`<EditFormDialog>` Events

<EventTable>
    <EventTableLine event="confirm" desc="表单提交事件，使用该事件，会覆盖 props.add props.edit" attr="(model: Record<string, any>,options: EditFormDialogConfirmOptions) => Promise<any>"  />
    <EventTableLine event="success" desc="表单提交成功弹框关闭回调" attr="isEdit:boolean"  />
    <EventTableLine event="close" desc="弹框关闭回调" attr=""  />
</EventTable>

`<EditFormDialog>` Slots

<SlotTable>
    <SlotTableLine slot="default" desc="默认插槽---------------------model:表单数据----------isEdit:是否编辑状态" attr="{ model: Record<string,any>, isEdit: boolean }"  />
</SlotTable>

### useEditFormDialog

`<EditFormDialog/>` 组件帮助方法

**配合 `<EditFormDialog/>` 使用**

```vue
<script lang="ts" setup>
import { useEditFormDialog } from '@vrx-arco/pro-components'

/**
 * @param formRef EditFormDialog组件实例
 * @param open 打开EditFormDialog组件
 */
const [formRef, open] = useEditFormDialog()

// open 方法增加类型验证
const [formRef, open] = useEditFormDialog<{ username: string, userId: string }>()

// 打开EditFormDialog组件
open()

// 可传入数据，为 EditFormDialog 提供数据拷贝
open({ username: '', userId: '' })
</script>

<template>
  <EditFormDialog ref="formRef">
    <template #default="{ model }">
      <AFormItem label="username" field="username">
        <AInput v-model="model.username" placeholder="username" />
      </AFormItem>
    </template>
  </EditFormDialog>
</template>
```

**配合任意弹框组件使用**

由于 `useEditFormDialog` 本质为调用组件实例的open方法

只需在独立的弹框组件声明 `expose({open})`

即可利用 `useEditFormDialog` 方法，达到打开弹窗组件的作用

#### EditFormDialogSlot

为 `<EditFormDialog />` 的默认插槽提供类型帮助

```vue
<script lang="ts" setup>
import { type EditFormDialogSlot, useEditFormDialog } from '@vrx-arco/pro-components'

/**
 * @param formRef EditFormDialog组件实例
 * @param open 打开EditFormDialog组件
 */
const [formRef, open] = useEditFormDialog()
</script>

<template>
  <EditFormDialog ref="formRef">
    <template #default="{ model }: EditFormDialogSlot<{ username: string; id: string }>">
      <AFormItem label="username" field="username">
        <AInput v-model="model.username" placeholder="username" />
      </AFormItem>
    </template>
  </EditFormDialog>
</template>
```
