<script lang="ts" setup>
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icon'
</script>

<template>
  <ACard>
    <div style="height: 700px;background-color: var(--color-fill-2);padding: 20px">
      <SearchLayout title="搜索布局" type="card">
        <SearchLayoutHeader>
          <SearchBar :column="1">
            <SearchBarItem label="label">
              <AInput />
            </SearchBarItem>
            <SearchBarItem label="label">
              <AInput />
            </SearchBarItem>
          </SearchBar>
        </SearchLayoutHeader>
        <SearchLayoutContent>
          <ProCardList
            pagination
            :data="
              Array(10)
                .fill(1)
                .map((item, index) => index + 1)
            "
            :column="1"
          >
            <template #header>
              <AButton type="primary">
                新增
              </AButton>
            </template>
            <template #item="{ item }">
              <ProCardMeta title="title" description="description">
                <template #avatar>
                  <AAvatar>{{ item }}</AAvatar>
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
    </div>
  </ACard>
</template>

<style scoped>

</style>
