<template>
  <AppSpinner v-if="isLoading" />
  <ul
    v-else-if="data"
    class="item-list list-group"
  >
    <li
      v-for="item in data"
      :key="item.id"
      class="list-group-item"
      @click="emit('onItemSelected', item.id)"
    >
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'ItemList',
};
</script>

<script setup lang="ts">
import { GetAllItems, Items } from '@/service/models';
import { onMounted, ref } from 'vue';
import AppSpinner from '@/components/AppSpinner.vue';

const props = defineProps<{ getData: GetAllItems }>();
const emit = defineEmits<{
  (event: 'onItemSelected', id: string): void;
}>();
const data = ref<Items>();
const isLoading = ref(true);

onMounted(() => {
  props.getData().then((newData) => {
    data.value = newData;
    isLoading.value = false;
  });
});
</script>

<style scoped>
.item-list {
  margin-bottom: 1rem;
}

.item-list .list-group-item {
  cursor: pointer;
}

.item-list .list-group-item:hover {
  background-color: #444;
}
</style>
