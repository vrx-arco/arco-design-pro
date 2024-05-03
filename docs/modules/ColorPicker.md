---
name: 颜色选择器
type: ProComponents
---

# 颜色选择器 ColorPicker <Badge type="warning" text="试验性功能，API不稳定" /> <Badge type="tip" text="0.0.1-beta.3" />

<script lang="ts" setup>
import {ColorPicker,ColorPalette} from '@vrx-arco/color-picker'
import {Card} from '@arco-design/web-vue'
import {ref} from 'vue'
const color = ref('#ff0000')
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

## 修改返回值格式

<Card>
 <ColorPicker  valueFormat="hsl" />
</Card>

```vue
<template>
  <Card>
    <ColorPicker value-format="hsl" />
  </Card>
</template>
```

## 直接使用颜色面板

<Card>
 <ColorPalette  />
</Card>

```vue
<template>
  <Card>
    <ColorPalette />
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

`<color-Picker>` `<color-palette>` Props

<ApiTable>
    <ApiTableLine prop="color" desc="颜色" type="string | number"  default="'#000000'" />
    <ApiTableLine prop="value-format" desc="颜色值格式" type="'rgb' | 'prgb' | 'hex' | 'hex3' | 'hex4' | 'hex6' | 'hex8' | 'name' | 'hsl' | 'hsv'" default="'rgb'"  />
</ApiTable>

`<color-Picker>` `<color-palette>` Events

<EventTable>
    <EventTableLine event="change" desc="修改颜色事件" attr="v: string | number"  />
</EventTable>

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
