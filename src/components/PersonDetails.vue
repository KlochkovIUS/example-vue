<template>
  <ItemDetails
    :item-id="itemId"
    :get-data="swapiService.getPerson"
    :get-image-url="swapiService.getPersonImage"
  >
    <template #default="slotProps">
      <ItemDetailsRecord
        field="gender"
        label="Gender"
        :item="slotProps.item"
      />
      <ItemDetailsRecord
        field="eye_color"
        label="Eye Color"
        :item="slotProps.item"
      />
    </template>
  </ItemDetails>
</template>

<script lang="ts">
export default {
  name: 'PersonDetails',
};
</script>

<script setup lang="ts">
import ItemDetailsRecord from '@/components/ItemDetailsRecord.vue';
import ItemDetails from '@/components/ItemDetails.vue';
import { useSwapiService } from '@/context/swapi-service-context';

defineProps<{ itemId: string | undefined }>();
const swapiService = useSwapiService();
</script>

<style scoped></style>
