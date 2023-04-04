<template>
  <div class="stardb-app container">
    <TheHeader />
    <RandomPlanet />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { swapiServiceKey } from '@/context/swapi-service-context';
import SwapiService from '@/service/swapi-service';
import RandomPlanet from '@/components/RandomPlanet.vue';
import TheHeader from '@/components/TheHeader.vue';

provide(swapiServiceKey, ref(new SwapiService()));
</script>

<style lang="scss">
.button-row {
  margin: 0 0 1rem 0;
}

.button-row button {
  margin-right: 1rem;
}

.stardb-app .row {
  margin-bottom: 1rem;
}
</style>
