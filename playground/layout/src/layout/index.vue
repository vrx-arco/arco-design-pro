<script setup lang="ts">
  import { moduleRoute } from '../router/modules'
</script>
<template>
  <ProLayout :menus="moduleRoute">
    <template #headerToolbox>
      <ASpace align="center">
        <ThemeDarkLight />
        <ToggleFullScreen />
        <AvatarDropDown username="whitekite" :dropdown="[{ value: 'logout', title: '登出' }]" />
      </ASpace>
    </template>
  </ProLayout>
</template>
