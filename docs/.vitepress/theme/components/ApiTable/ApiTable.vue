<script lang="ts" setup>
import { Link as ALink, TableColumn as ATableColumn } from '@arco-design/web-vue'
import { BaseConfigTable } from '../BaseConfigTable'
</script>

<template>
  <BaseConfigTable>
    <template #columns>
      <ATableColumn title="参数名" data-index="prop" :width="160" />
      <ATableColumn title="描述" data-index="desc" />
      <ATableColumn title="类型" data-index="type">
        <template #cell="{ record }">
          <ALink :href="record.typeLink">
            {{ record.type }}
          </ALink>
        </template>
      </ATableColumn>
      <ATableColumn title="默认值" data-index="default">
        <template #cell="{ record }">
          <ALink>{{ record.default }}</ALink>
        </template>
      </ATableColumn>
      <ATableColumn title="版本" data-index="version" :width="80" />
    </template>
    <slot />
  </BaseConfigTable>
</template>
