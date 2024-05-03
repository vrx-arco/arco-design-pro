<script lang="ts" setup>
import { injectBaseConfigTable } from '../BaseConfigTable'

const props = defineProps({
  prop: String,
  desc: String,
  type: String,
  typeLink: String,
  default: String,
  version: String,
})

const { push } = injectBaseConfigTable()

push(props)
</script>

<template>
  <slot />
</template>
