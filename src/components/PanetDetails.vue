<template>
  <ItemDetails
    :item-id="itemId"
    :get-data="swapiService.getPlanet"
    :get-image-url="swapiService.getPlanetImage"
  >
    <template #default="slotProps">
      <ItemDetailsRecord
        field="population"
        label="Population"
        :item="slotProps.item"
      />
      <ItemDetailsRecord
        field="rotation_period"
        label="Rotation Period"
        :item="slotProps.item"
      />
      <ItemDetailsRecord
        field="diameter"
        label="Diameter"
        :item="slotProps.item"
      />
    </template>
  </ItemDetails>
</template>

<script lang="ts">
export default {
  name: 'PlanetDetails',
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
