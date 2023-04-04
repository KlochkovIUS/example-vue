<template>
  <ItemDetails
    :item-id="itemId"
    :get-data="swapiService.getStarship"
    :get-image-url="swapiService.getStarshipImage"
  >
    <template #default="slotProps">
      <ItemDetailsRecord
        field="model"
        label="Model"
        :item="slotProps.item"
      />
      <ItemDetailsRecord
        field="length"
        label="Length"
        :item="slotProps.item"
      />
      <ItemDetailsRecord
        field="cost_in_credits"
        label="Cost"
        :item="slotProps.item"
      />
    </template>
  </ItemDetails>
</template>

<script lang="ts">
export default {
  name: 'StarshipDetails',
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
