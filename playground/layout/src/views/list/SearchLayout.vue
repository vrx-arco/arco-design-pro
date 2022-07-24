<script setup lang="ts">
  import {
    CardList,
    ProCardMeta,
    SearchLayout,
    SearchLayoutContent,
    SearchLayoutHeader,
  } from '@vrx-arco/pro-components'
  import { PageWrapper } from '@vrx-arco/pro-layout'
  import { Avatar } from '@arco-design/web-vue'
  import { IconEdit, IconEye, IconMore, IconUser } from '@arco-design/web-vue/es/icon'
</script>
<template>
  <PageWrapper>
    <SearchLayout title="搜索布局">
      <SearchLayoutHeader>
        <div>ssss</div>
      </SearchLayoutHeader>
      <SearchLayoutContent
        use-tabs
        :tabs="[
          { key: 'all', title: '全部' },
          { key: 'list', title: '列表' },
        ]"
      >
        <CardList
          pagination
          :data="
            Array(100)
              .fill(1)
              .map((item, index) => index + 1)
          "
          scroll
        >
          <template #item="{ item }">
            <ProCardMeta title="title" description="description">
              <template #avatar>
                <Avatar>{{ item }}</Avatar>
              </template>
              <template #actions>
                <IconUser />
                <IconEye />
                <IconEdit />
                <IconMore />
              </template>
            </ProCardMeta>
          </template>
        </CardList>
      </SearchLayoutContent>
    </SearchLayout>
  </PageWrapper>
</template>
