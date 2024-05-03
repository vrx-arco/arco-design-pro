---
name: 登录表单
type: ProComponents
---

<script setup lang="ts">
import {LoginForm} from '@vrx-arco/pro-components';
import {Card} from '@arco-design/web-vue';

const handleSubmit = () => {
  return Promise.reject(Error('登录出错'))
}
</script>

# 登录表单 LoginForm

基于 arco-pro 的登录表单快速成型预设

## 普通登录表单

<Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
        <LoginForm title="登录 Arco Design Pro" subtitle="登录 Arco Design Pro" @submit="handleSubmit"/>
    </div>
</Card>

```vue
<script setup lang="ts">
import { LoginForm } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'

const handleSubmit = () => {
  return Promise.reject(Error('登录出错'))
}
</script>

<template>
  <Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
      <LoginForm
        title="登录 Arco Design Pro"
        subtitle="登录 Arco Design Pro"
        @submit="handleSubmit"
      />
    </div>
  </Card>
</template>
```

## 添加注册，记住密码按钮

<Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
        <LoginForm title="登录 Arco Design Pro" subtitle="登录 Arco Design Pro" register remember @submit="handleSubmit"/>
    </div>
</Card>

```vue
<script setup lang="ts">
import { LoginForm } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'

const handleSubmit = () => {
  return Promise.reject(Error('登录出错'))
}
</script>

<template>
  <Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
      <LoginForm title="登录 Arco Design Pro" subtitle="登录 Arco Design Pro" register remember />
    </div>
  </Card>
</template>
```

## 使用内置消息提示组件

请填写用户名密码点击登录进行体验

<Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
        <LoginForm title="登录 Arco Design Pro" subtitle="登录 Arco Design Pro"  submitNotice @submit="handleSubmit"/>
    </div>
</Card>

```vue
<script setup lang="ts">
import { LoginForm } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'

const handleSubmit = () => {
  return Promise.reject(Error('登录出错'))
}
</script>

<template>
  <Card>
    <div style="width: 400px;margin:auto;padding:20px 0">
      <LoginForm title="登录 Arco Design Pro" subtitle="登录 Arco Design Pro" submit-notice />
    </div>
  </Card>
</template>
```

## API

`<login-form>` Props

<ApiTable>
    <ApiTableLine prop="title" desc="标题" type="string"  default="''" />
    <ApiTableLine prop="subtitle" desc="副标题" type="string" default="''"  />
    <ApiTableLine prop="submitNotice" desc="是否使用内置消息提示组件" type="boolean" default="false"  />
    <ApiTableLine prop="model(v-model)" desc="传入任何数据外部受控表单数据" type="object" default="{username:'',password:''}"  />
</ApiTable>

`<login-form>` Slots

<SlotTable>
    <SlotTableLine slot="title" desc="替换标题与副标题"  />
    <SlotTableLine slot="form" desc="支持定义额外表单项" attr="{model:Record<string,any>}"  />
</SlotTable>

`<login-form>` Events

<EventTable>
    <EventTableLine event="submit" desc="提交事件，请注意该方法必须返回一个promise" attr="(model: LoginFormModel, remember: boolean) => Promise<any>"  />
    <EventTableLine event="forget" desc="忘记密码按钮点击事件" attr="()=>void"  />
    <EventTableLine event="register" desc="注册按钮点击事件" attr="()=>void"  />
</EventTable>
