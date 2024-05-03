<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

function onOfflineReady() {
  offlineReady.value = true
}
function onNeedRefresh() {
  needRefresh.value = true
}
async function close() {
  offlineReady.value = false
  needRefresh.value = false
}

onBeforeMount(async () => {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <template v-if="offlineReady || needRefresh">
    <div
      class="pwa-toast"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-3">
        {{ offlineReady ? '网站现在可以离线使用了' : '有新更新内容，请点击重载更新' }}
      </div>
      <button
        v-if="needRefresh"
        type="button"
        class="pwa-refresh"
        @click="updateServiceWorker?.()"
      >
        重载
      </button>
      <button
        type="button"
        class="pwa-cancel"
        @click="close"
      >
        关闭
      </button>
    </div>
  </template>
</template>

<style>
    .pwa-toast {
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 16px;
        padding: 12px;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 4px;
        z-index: 100;
        text-align: left;
        background-color: var(--vp-c-bg-soft);
    }
    .pwa-toast #pwa-message {
        margin-bottom: 8px;
    }
    .pwa-toast button {
        border: 1px solid var(--vp-button-alt-border);
        outline: none;
        margin-right: 5px;
        border-radius: 2px;
        padding: 3px 10px;
        background-color: var(--vp-button-alt-bg);
    }
</style>
