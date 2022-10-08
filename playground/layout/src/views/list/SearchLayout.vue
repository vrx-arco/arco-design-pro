<script setup lang="ts">
  import {
    ProCardList,
    ProCardMeta,
    SearchBar,
    SearchBarItem,
    SearchLayout,
    SearchLayoutContent,
    SearchLayoutHeader,
    SpaceDivider,
  } from '@vrx-arco/pro-components'
  import { PageWrapper } from '@vrx-arco/pro-layout'
  import { Avatar, Button, Card, Input, Space } from '@arco-design/web-vue'
  import { IconEdit, IconEye, IconMore, IconUser } from '@arco-design/web-vue/es/icon'
  import { Permission } from '@vrx-arco/app'
  import { ref } from 'vue'

  const model = ref({ v1: '', v2: '', v3: '', v4: '' })
</script>
<template>
  <PageWrapper>
    <SearchLayout title="搜索布局" type="card">
      <SearchLayoutHeader>
        <SpaceDivider>
          <Permission>
            <Button>sssss</Button>
          </Permission>
          <Permission>
            <Button>sssss</Button>
          </Permission>
          <Card> ssss </Card>
        </SpaceDivider>
        <SearchBar :model="model" auto-update reset-on-button-click valid-on-button-click>
          <SearchBarItem label="label" field="v1" required>
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label" field="v2">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label" field="v3">
            <Input />
          </SearchBarItem>
          <SearchBarItem label="label" field="v4">
            <Input />
          </SearchBarItem>
          <Permission data="ssss">
            <SearchBarItem label="label" field="v5">
              <Input />
            </SearchBarItem>
          </Permission>
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
