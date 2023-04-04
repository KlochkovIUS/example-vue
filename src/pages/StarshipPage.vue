<template>
  <AppRow>
    <template #left>
      <StarshipList @on-item-selected="onIdChanged" />
    </template>
    <template #right>
      <StarshipDetails :item-id="id" />
    </template>
  </AppRow>
</template>

<script lang="ts">
export default {
  name: 'StarshipPage',
};
</script>

<script setup lang="ts">
import AppRow from '@/components/AppRow.vue';
import StarshipList from '@/components/StarshipList.vue';
import StarshipDetails from '@/components/StarshipDetails.vue';
import useNavigationById from '@/hooks/useNavigationById';

const { id, onIdChanged } = useNavigationById('starships');
</script>

<style scoped></style>
