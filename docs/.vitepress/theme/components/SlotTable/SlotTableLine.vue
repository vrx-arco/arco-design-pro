<script lang="ts" setup>
import { injectBaseConfigTable } from '../BaseConfigTable'

const props = defineProps({
  slot: String,
  desc: String,
  attr: String,
  version: String,
})

const { push } = injectBaseConfigTable()

push(props)
</script>

<template>
  <slot />
</template>
