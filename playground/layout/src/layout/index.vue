<script setup lang="ts">
  import IconAlignCenter from '@arco-design/web-vue/es/icon/icon-align-center'
  import IconArchive from '@arco-design/web-vue/es/icon/icon-align-center'
  import { moduleRoute } from '../router/modules'
</script>
<template>
  <ProLayout
    :menus="moduleRoute"
    title="Arco Pro"
    logo="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
  >
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
