<script setup lang="ts">
  import {
    ProCardList,
    ProCardMeta,
    SearchLayout,
    SearchLayoutContent,
    SearchLayoutHeader,
    SearchBar,
    SearchBarItem,
  } from '@vrx-arco/pro-components'
  import { PageWrapper } from '@vrx-arco/pro-layout'
  import { Avatar, Input, Button } from '@arco-design/web-vue'
  import { IconEdit, IconEye, IconMore, IconUser } from '@arco-design/web-vue/es/icon'
</script>
<template>
  <PageWrapper>
    <SearchLayout title="搜索布局">
      <SearchLayoutHeader>
        <SearchBar>
          <SearchBarItem label="label">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label">
            <Input />
          </SearchBarItem>
        </SearchBar>
      </SearchLayoutHeader>
      <SearchLayoutContent
        :tabs="[
          { key: 'all', title: '全部' },
          { key: 'list', title: '列表' },
        ]"
      >
        <ProCardList
          pagination
          :data="
            Array(100)
              .fill(1)
              .map((item, index) => index + 1)
          "
        >
          <template #header>
            <Button type="primary">新增</Button>
          </template>
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
        </ProCardList>
      </SearchLayoutContent>
    </SearchLayout>
  </PageWrapper>
</template>
