<template>
  <ItemList
    :get-data="swapiService.getAllPlanets"
    @on-item-selected="onItemSelected"
  />
</template>

<script lang="ts">
export default {
  name: 'PlanetList',
};
</script>

<script setup lang="ts">
import ItemList from '@/components/ItemList.vue';
import { useSwapiService } from '@/context/swapi-service-context';

const emit = defineEmits<{
  (event: 'onItemSelected', id: string): void;
}>();
const swapiService = useSwapiService();
const onItemSelected = (id: string) => {
  emit('onItemSelected', id);
};
</script>

<style scoped></style>
