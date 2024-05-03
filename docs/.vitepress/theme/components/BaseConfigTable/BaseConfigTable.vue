<script lang="ts" setup>
import { Table as ATable } from '@arco-design/web-vue'
import { ref } from 'vue'
import { provideBaseConfigTable } from './context'

const data = ref<any[]>([])

function push(value) {
  data.value.push(value)
}

provideBaseConfigTable({ push })
</script>

<template>
  <ATable :pagination="false" :data="data" :scroll="{ minWidth: 600 }" table-layout-fixed column-resizable>
    <template #columns>
      <slot name="columns" />
    </template>
  </ATable>
  <slot />
</template>

<style lang="less">
@import '../../style/configTable';
</style>
