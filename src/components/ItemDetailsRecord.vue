<template>
  <li
    v-if="item"
    class="list-group-item"
  >
    <span class="term">{{ label }}</span>
    <span>{{ item[field] }}</span>
  </li>
</template>

<script lang="ts">
export default {
  name: 'ItemDetailsRecord',
};
</script>

<script setup lang="ts">
import { Item } from '@/service/models';

defineProps<{
  item?: Item;
  field: string;
  label: string;
}>();
</script>

<style scoped>
.list-group-item {
  padding: 0.25rem;
}

.list-group-item .term {
  margin-right: 0.5rem;
}
</style>
