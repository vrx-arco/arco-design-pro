---
name: 颜色选择器
type: ProComponents
---

# 颜色选择器 ColorPicker <Badge type="warning" text="试验性功能，API不稳定" />

[![NPM Version](https://img.shields.io/npm/v/%40vrx-arco%2Fcolor-picker?style=flat-square)](https://www.npmjs.com/package/@vrx-arco/color-picker)

[更新日志](https://gitee.com/vrx-arco/color-picker/blob/main/CHANGELOG.md)

<script lang="ts" setup>
import {ColorPicker,ColorPickerPanel} from '@vrx-arco/color-picker'
import {Card} from '@arco-design/web-vue'
import {ref} from 'vue'
const color = ref('#165DFF')
</script>

## 安装

:::code-group

```bash [npm]
$ npm i @vrx-arco/color-picker
```

```bash [yarn]
$ yarn add @vrx-arco/color-picker
```

```bash [pnpm]
$ pnpm add @vrx-arco/color-picker
```

```bash [bun]
$ bun add @vrx-arco/color-picker
```

:::

## 普通使用

<Card>
 <ColorPicker />
</Card>

```vue
<template>
  <Card>
    <ColorPicker />
  </Card>
</template>
```

## 受控模式

<Card>
 <ColorPicker v-model:color="color" />
</Card>

```vue
<template>
  <Card>
    <ColorPicker v-model:color="color" />
  </Card>
</template>
```

## 显示颜色文字

<Card>
 <ColorPicker v-model:color="color" showText />
</Card>

```vue
<template>
  <Card>
    <ColorPicker v-model:color="color" showText />
  </Card>
</template>
```

## 隐藏透明度调节

<Card>
 <ColorPicker v-model:color="color" showText disabledAlpha />
</Card>

```vue
<template>
  <Card>
    <ColorPicker v-model:color="color" showText disabledAlpha />
  </Card>
</template>
```

## 禁用

<Card>
 <ColorPicker v-model:color="color" showText disabled />
 <div>
  <ColorPicker v-model:color="color" disabled />
 </div>
</Card>

```vue
<template>
  <Card>
    <ColorPicker v-model:color="color" showText disabled />
    <ColorPicker v-model:color="color" disabled />
  </Card>
</template>
```

## 修改颜色格式

<Card>
 <ColorPicker  format="rgb" defaultValue="rgb(22, 93, 255)" showText />
</Card>

```vue
<template>
  <Card>
    <ColorPicker format="rgb" defaultValue="rgb(22, 93, 255)" showText />
  </Card>
</template>
```

## 直接使用颜色面板

<Card bodyStyle="display:flex;">
 <ColorPickerPanel  />
 <ColorPickerPanel disabled style="margin-left:10px;"  />
</Card>

```vue
<template>
  <Card>
    <ColorPickerPanel />
    <ColorPickerPanel disabled   />
  </Card>
</template>
```

## 样式完整导入
```ts
// 导入依赖的所有 less样式
import '@vrx-arco/color-picker/arco-style'

// 导入依赖的所有css样式
import '@vrx-arco/color-picker/arco-style-css'

// 导入自身样式
import '@vrx-arco/color-picker/style/index.css'
```
## 自动导入

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 对组件与样式进行自动按需导入

### 安装

:::code-group

```bash [npm]
$ npm i @vrx-arco/helper -D
# or
$ npm i @vrx-arco/color-picker-import-resolver -D
```

```bash [yarn]
$ yarn add @vrx-arco/helper -D
# or
$ yarn add @vrx-arco/color-picker-import-resolver -D
```

```bash [pnpm]
$ pnpm add @vrx-arco/helper -D
# or
$ pnpm add @vrx-arco/color-picker-import-resolver -D
```

```bash [bun]
$ bun add @vrx-arco/helper  -D
# or
$ bun add @vrx-arco/color-picker-import-resolver  -D
```

:::

### 使用

```ts
import { VrxArcoProComponentsResolver } from '@vrx-arco/helper'

// or
import { VrxArcoColorPickerResolver } from '@vrx-arco/color-picker-import-resolver'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        VrxArcoColorPickerResolver({}),
        // or
        VrxArcoProComponentsResolver({ colorPicker: true })
      ],
    }),
  ],
})
```

## API

`<color-picker>` `<color-picker-panel>` 共用Props

<ApiTable>
    <ApiTableLine prop="modelValue[v-model]" desc="颜色" type="string" />
    <ApiTableLine prop="defaultValue" desc="默认值" type="string"  default="'#165DFF'" />
    <ApiTableLine prop="format" desc="结果值格式化" type="'rgb' | 'prgb' | 'hex' | 'hex3' | 'hex4' | 'hex6' | 'hex8' | 'name' | 'hsl' | 'hsv'" default="'hex'"  />
     <ApiTableLine prop="disabled" desc="禁用" type="boolean"  default="false" />
     <ApiTableLine prop="disabledAlpha" desc="禁用透明通道" type="boolean"  default="false" />
</ApiTable>

`<color-Picker>` Props

<ApiTable>
    <ApiTableLine prop="triggerProps" desc="弹出框入参" type="TriggerProps" />
    <ApiTableLine prop="showText" desc="显示颜色值" type="boolean" default="false" />
</ApiTable>

`<color-picker>` `<color-picker-panel>` Events

<EventTable>
    <EventTableLine event="change" desc="修改颜色事件" attr="value: string"  />
    <EventTableLine event="popup-visible-change" desc="颜色面板展开和收起时触发" attr="[visible: boolean,value: string]"  />
</EventTable>

`<color-picker>` Slots

<SlotTable>
    <SlotTableLine slot="default" desc="可替换 trigger 触发器" attr="{color:string}"  />
</SlotTable>

## nuxt

其他服务端渲染配置，请参考 nuxt 插件的具体实现

### 安装

:::code-group

```bash [npm]
$ npm i  @vrx-arco/nuxt -D
```

```bash [yarn]
$ yarn add @vrx-arco/nuxt -D
```

```bash [pnpm]
$ pnpm add @vrx-arco/nuxt -D
```

```bash [bun]
$ bun add @vrx-arco/nuxt -D
```

:::

### Options

请跳转 [Options](https://gitee.com/vrx/arco-design-pro/blob/master/packages/nuxt/src/type.ts) 查看

### 启用功能

```ts
export default defineNuxtConfig({
  modules: ['@vrx-arco/nuxt'],
  vrxArco: {
    colorPicker: true,
  },
})
```
