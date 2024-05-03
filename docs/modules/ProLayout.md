---
name: 布局
type: ProLayout
---

# 布局 ProLayout

用于快速生成 arco-pro 默认的布局

## 根据路由快速生成布局与菜单

<img src="/images/layout-preview.png" alt="layout-preview.png">

```vue
<script lang="ts" setup>
import { PageWrapper, ProLayout } from '@vrx-arco/pro-layout'
import { Space } from '@arco-design/web-vue'
import { AvatarDropDown, ThemeDarkLight, ToggleFullScreen } from '@vrx-arco/pro-components'
import moduleRoute from '@/router/moduleRoute'
</script>

<template>
  <ProLayout :menus="moduleRoute">
    <template #headerToolbox>
      <Space>
        <ThemeDarkLight />
        <ToggleFullScreen />
        <AvatarDropDown username="whitekite" :dropdown="[{ value: 'logout', title: '登出' }]" />
      </Space>
    </template>
    <PageWrapper> 测试</PageWrapper>
  </ProLayout>
</template>
```

## API

`<pro-layout>` Props

<ApiTable>
    <ApiTableLine prop="title" desc="标题" type="string" default="''" />
    <ApiTableLine prop="loading" desc="布局的全局加载状态" type="boolean" default="false" />
    <ApiTableLine prop="logo" desc="logo" type="string" default="false" />
    <ApiTableLine prop="menus" desc="基于路由信息生成的菜单" type="RouteRecordRaw[]" default="[]" />
</ApiTable>

`<pro-layout>` Slots

<SlotTable>
    <SlotTableLine slot="title" desc="标题"  />
    <SlotTableLine slot="logo" desc="logo"  />
    <SlotTableLine slot="logoContainer" desc="覆盖logo+标题的整个区域"  />
    <SlotTableLine slot="headerToolbox" desc="头部布局右侧工具栏"  />
    <SlotTableLine slot="navContent" desc="头部布局中央空余空间使用"  />
    <SlotTableLine slot="menuIcon" desc="自定义menu icon-使用该插槽 menus 中的路由元信息配置失效" attr="RouteRecordRaw" version="1.3.7"  />
    <SlotTableLine slot="default" desc="布局默认插槽-不使用该插槽时默认使用 <RouterView>"  />
</SlotTable>

## 提示

菜单名称根据路由配置信息中的 `meta.title` 生成

菜单图标根据路由配置信息中的 `meta.icon` 生成

配置 `meta.hidden` 可使菜单在生成时忽略这部分路由

配置 `meta.list` 可使菜单在生成时忽略所有子路由菜单，并将子路由第一项 name 作为 菜单 name

- `meta.list` 主要适用于 列表需要显示于菜单，新增/编辑/详情页隐藏于菜单的场景
