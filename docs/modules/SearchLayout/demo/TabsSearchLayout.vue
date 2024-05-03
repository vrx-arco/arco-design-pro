<script lang="ts" setup>
import { IconEdit, IconEye, IconMore, IconUser } from '@vrx-arco/icon'
import { ref } from 'vue'

const type = ref('line')
</script>

<template>
  <ACard>
    <div class="demo">
      <div class="demo-head">
        <ARadioGroup v-model="type" type="button">
          <ARadio value="line">
            Line
          </ARadio>
          <ARadio value="card">
            Card
          </ARadio>
          <ARadio value="card-gutter">
            Card Gutter
          </ARadio>
          <ARadio value="text">
            Text
          </ARadio>
          <ARadio value="rounded">
            Rounded
          </ARadio>
          <ARadio value="capsule">
            Capsule
          </ARadio>
        </ARadioGroup>
      </div>
      <SearchLayout class="demo-content" title="搜索布局" type="card">
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
        <SearchLayoutContent
          :tabs="[
            { key: 'all', title: '全部' },
            { key: 'list', title: '列表' },
          ]"
          use-tabs
          :tabs-type="type"
        >
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
.demo {
  height: 800px;
  background-color: var(--color-fill-2);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo-head {
  background-color: var(--color-bg-2);
  padding: 20px;
  margin-bottom: 10px;
}
.demo-content{
  min-height: 0;
  flex: 1;
}
</style>
