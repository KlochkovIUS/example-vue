<template>
  <AppRow>
    <template #left>
      <PlanetList @on-item-selected="onItemSelected" />
    </template>
    <template #right>
      <PlanetDetails :item-id="id" />
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
import PlanetList from '@/components/PlanetList.vue';
import PlanetDetails from '@/components/PanetDetails.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const id = computed(() => route.params.id.toString());
const onItemSelected = (newSelectedItem: string) => {
  router.push(`/planets/${newSelectedItem}`);
};
</script>

<style scoped></style>
