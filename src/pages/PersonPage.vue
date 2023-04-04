<template>
  <AppRow>
    <template #left>
      <PersonList @on-item-selected="onItemSelected" />
    </template>
    <template #right>
      <PersonDetails :item-id="selectedItemId" />
    </template>
  </AppRow>
</template>

<script lang="ts">
export default {
  name: 'PersonPage',
};
</script>

<script setup lang="ts">
import AppRow from '@/components/AppRow.vue';
import { ref } from 'vue';
import PersonList from '@/components/PersonList.vue';
import PersonDetails from '@/components/PersonDetails.vue';

const selectedItemId = ref<string>();
const onItemSelected = (newSelectedItem: string) => {
  selectedItemId.value = newSelectedItem;
};
</script>

<style scoped></style>
