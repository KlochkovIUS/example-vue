<template>
  <div class="random-planet jumbotron rounded">
    <AppErrorIndicator v-if="isError" />
    <AppSpinner v-if="isLoading" />
    <template v-if="!(isError || isLoading)">
      <img
        class="planet-image"
        :src="planetSrc"
        alt="planet"
      />
      <div>
        <h4>{{ planet.name }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="term">Population</span>
            <span>{{ planet.population }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Rotation Period</span>
            <span>{{ planet.rotationPeriod }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Diameter</span>
            <span>{{ planet.diameter }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RandomPlanet',
};
</script>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';
import { swapiServiceKey } from '@/context/swapi-service-context';
import { Planet } from '@/service/models';
import { sleep } from '@/utils/sleep';
import AppErrorIndicator from '@/components/AppErrorIndicator.vue';
import AppSpinner from '@/components/AppSpinner.vue';

const swapiService = inject(swapiServiceKey);
const planet = ref<Planet>();
const planetSrc = computed(
  () =>
    planet.value &&
    `https://starwars-visualguide.com/assets/img/planets/${planet.value.id}.jpg`
);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);
const interval = ref();

onMounted(() => {
  updatePlanet();
  interval.value = setInterval(updatePlanet, 10000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});

const onPlanetLoaded = (newPlanet: Planet) => {
  isLoading.value = false;
  planet.value = newPlanet;
};

const onError = () => {
  isLoading.value = false;
  isError.value = true;
};

const updatePlanet = () => {
  const id = Math.floor(Math.random() * 17) + 2;
  isLoading.value = true;
  if (swapiService?.value) {
    swapiService.value
      .getPlanet(id.toString())
      .then(sleep(2000))
      .then(onPlanetLoaded)
      .catch(onError);
  } else {
    onError();
  }
};
</script>

<style scoped>
.random-planet {
  display: flex;
  padding: 1rem;
  border: 1px solid #444;
  margin-bottom: 1rem;
}

.random-planet .planet-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
}

.random-planet .list-group {
  margin: 1rem 0 0 1rem;
}

.random-planet .list-group-item {
  padding: 0.25rem;
}

.random-planet .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
