<script setup lang="ts">
  // import {
  // ProCardList,
  // ProCardMeta,
  // SearchBar,
  // SearchBarItem,
  // SearchLayout,
  // SearchLayoutContent,
  // SearchLayoutHeader,
  // SpaceDivider,
  // } from '@vrx-arco/pro-components'
  // import { PageWrapper } from '@vrx-arco/pro-layout'
  import { Avatar, Button, Card, Input } from '@arco-design/web-vue'
  import IconEdit from '@arco-design/web-vue/es/icon/icon-edit'
  import IconEye from '@arco-design/web-vue/es/icon/icon-eye'
  import IconMore from '@arco-design/web-vue/es/icon/icon-more'
  import IconUser from '@arco-design/web-vue/es/icon/icon-user'
  import { Permission } from '@vrx-arco/app'
  import { ref } from 'vue'

  const model = ref({ v1: '', v2: '', v3: '', v4: '' })
</script>
<template>
  <PageWrapper scrollbar>
    <SearchLayout title="搜索布局" type="card">
      <SearchLayoutHeader>
        <ColorPicker />
        <SpaceDivider>
          <Permission>
            <Button>sssss</Button>
          </Permission>
          <Permission data="data">
            <Button>sssss</Button>
          </Permission>
          <Card> sssss </Card>
        </SpaceDivider>
        <SearchBar :model="model" auto-update reset-on-button-click valid-on-button-click>
          <SearchBarItem label="label" field="v1" required>
            <Input :placeholder="model.v1" />
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
        use-tabs
        tabs-type="line"
      >
        <ProCardList
          pagination
          :data="
            Array(100)
              .fill(1)
              .map((_item, index) => index + 1)
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
