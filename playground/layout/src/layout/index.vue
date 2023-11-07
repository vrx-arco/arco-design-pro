<script setup lang="ts">
  import { IconAlignCenter, IconArchive } from '@arco-design/web-vue/es/icon'
  import { moduleRoute } from '../router/modules'
</script>
<template>
  <ProLayout :menus="moduleRoute">
    <template #menuIcon="{ name }">
      <IconAlignCenter v-if="name === 'search-layout'" />
      <IconArchive v-else />
    </template>
    <template #headerToolbox>
      <ASpace align="center">
        <ThemeDarkLight />
        <ToggleFullScreen />
        <AvatarDropDown username="whitekite" :dropdown="[{ value: 'logout', title: '登出' }]" />
      </ASpace>
    </template>
  </ProLayout>
</template>
