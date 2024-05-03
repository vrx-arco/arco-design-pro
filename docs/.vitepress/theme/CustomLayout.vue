<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import { useData } from 'vitepress'
  import { watch } from 'vue'
  import TeamPage from './components/TeamPage.vue'
  import ReloadPrompt from './components/ReloadPrompt.vue'

  const { isDark } = useData()

  watch(
    isDark,
    (dark) => {
      if (import.meta.env.SSR) return

      if (dark) {
        // 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark')
        return
      }
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme')
    },
    { immediate: true }
  )
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <TeamPage />
    </template>
    <template #layout-bottom>
      <ReloadPrompt />
    </template>
  </DefaultTheme.Layout>
</template>
