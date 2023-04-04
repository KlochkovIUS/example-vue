<template>
  <span v-if="!item || !itemId">Select a item from a list</span>
  <AppSpinner v-else-if="isLoading" />
  <div
    v-else
    class="item-details card"
  >
    <img
      class="item-image"
      :src="image"
      alt="item"
    />
    <div class="card-body">
      <h4>{{ item.name }}</h4>
      <ul class="list-group list-group-flush">
        <slot :item="item" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ItemDetails',
};
</script>

<script setup lang="ts">
import { GetItem, Item } from '@/service/models';
import { onMounted, onUpdated, ref, watch } from 'vue';
import AppSpinner from '@/components/AppSpinner.vue';

const props = defineProps<{
  itemId: string | undefined;
  getData: GetItem;
  getImageUrl: ({ id }: { id: any }) => string;
}>();
const isLoading = ref(true);
const image = ref<string>();
const item = ref<Item>();

onMounted(() => {
  getPersonData();
});

watch(
  () => props.itemId,
  () => getPersonData()
);

const getPersonData = () => {
  if (props.itemId) {
    isLoading.value = true;
    props.getData(props.itemId).then((newItem) => {
      item.value = newItem;
      image.value = props.getImageUrl(newItem);
      isLoading.value = false;
    });
  }
};
</script>

<style scoped>
.item-details {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #444;
}

.item-details .item-image {
  width: 30%;
  height: 30%;
  border-radius: 10px;
}

.item-details button {
  margin-top: 5px;
}
</style>
