<script lang="ts" setup>
import { Link as ALink, TableColumn as ATableColumn } from '@arco-design/web-vue'
import { BaseConfigTable } from '../BaseConfigTable'
</script>

<template>
  <BaseConfigTable>
    <template #columns>
      <ATableColumn title="事件名" data-index="event" :width="160" />
      <ATableColumn title="描述" data-index="desc" />
      <ATableColumn title="参数" data-index="attr">
        <template #cell="{ record }">
          <ALink>{{ record.attr }}</ALink>
        </template>
      </ATableColumn>
      <ATableColumn title="版本" data-index="version" :width="80" />
    </template>
    <slot />
  </BaseConfigTable>
</template>
