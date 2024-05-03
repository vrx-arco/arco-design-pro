---
name: 登录页
type: ProComponents
---

<script setup lang="ts">
import {LoginForm,LoginPage} from '@vrx-arco/pro-components';
import {Card} from '@arco-design/web-vue';
import loginBanner from '/images/login-banner.png';

const handleSubmit = () => {
  return Promise.reject('登录')
}
</script>

# 登录页 LoginPage

基于 arco-pro 的 登录页快速成型组件

<Card>
<div style="height: 500px">
 <LoginPage title="希儿"
          logo="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" 
          bannerTitle="希儿天下第一"
          bannerSubtitle="黑希铠甲合体"
          :bannerImage="loginBanner"
          formTitle="希儿"
          formSubtitle="拜托了，另一个我！" 
          @submit="handleSubmit"
/>
</div>
</Card>

```vue
<script lang="ts" setup>
import { LoginForm, LoginPage } from '@vrx-arco/pro-components'
import { Card } from '@arco-design/web-vue'
import loginBanner from '/images/login-banner.png'

const handleSubmit = () => {
  return Promise.reject(Error('登录'))
}
</script>

<template>
  <Card>
    <div style="height: 500px">
      <LoginPage
        title="希儿"
        logo="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        banner-title="希儿天下第一"
        banner-subtitle="黑希铠甲合体"
        :banner-image="loginBanner"
        form-title="希儿"
        form-subtitle="拜托了，另一个我！"
        @submit="handleSubmit"
      />
    </div>
  </Card>
</template>
```

## API

`<login-page>` Props

<ApiTable>
    <ApiTableLine prop="logo" desc="logo" type="string"  default="''" />
    <ApiTableLine prop="title" desc="标题" type="string" default="''"  />
    <ApiTableLine prop="bannerTitle" desc="左侧介绍页标题" type="string" default="''"  />
    <ApiTableLine prop="bannerSubtitle" desc="左侧介绍页副标题" type="string" default="''"  />
    <ApiTableLine prop="bannerImage" desc="左侧介绍页图片" type="string" default="''"  />
    <ApiTableLine prop="formTitle" desc="登录表单标题" type="string" default="''"  />
    <ApiTableLine prop="formSubtitle" desc="登录表单副标题" type="string" default="''"  />
    <ApiTableLine prop="formForget" desc="登录表单忘记密码功能" type="boolean" default="false"  />
    <ApiTableLine prop="formRegister" desc="登录表单注册功能" type="boolean" default="false"  />
    <ApiTableLine prop="formRemember" desc="登录表单记住密码功能" type="boolean" default="false"  />
    <ApiTableLine prop="model(v-model)" desc="传入任何数据外部受控表单数据" type="object" default="{username:'',password:''}"  />
</ApiTable>

`<login-page>` Slots

<SlotTable>
    <SlotTableLine slot="logo" desc="logo"  />
    <SlotTableLine slot="title" desc="标题"  />
    <SlotTableLine slot="bannerTitle" desc="左侧介绍页标题"  />
    <SlotTableLine slot="bannerSubtitle" desc="左侧介绍页副标题"   />
    <SlotTableLine slot="bannerImage" desc="左侧介绍页图片"  />
    <SlotTableLine slot="formTitle" desc="登录表单标题"  />
    <SlotTableLine slot="form" desc="支持定义额外表单项" attr="{model:Record<string,any>}"  />
</SlotTable>

`<login-page>` Events

<EventTable>
    <EventTableLine event="submit" desc="提交事件，请注意该方法必须返回一个promise" attr="(model: LoginFormModel, remember: boolean) => Promise<any>"  />
    <EventTableLine event="forget" desc="忘记密码按钮点击事件" attr="()=>void"  />
    <EventTableLine event="register" desc="注册按钮点击事件" attr="()=>void"  />
</EventTable>
