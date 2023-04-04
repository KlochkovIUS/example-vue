<template>
  <div class="header d-flex">
    <h3>
      <router-link to="/">StarDB</router-link>
    </h3>
    <ul class="d-flex">
      <li>
        <router-link to="/people/">People</router-link>
      </li>
      <li>
        <router-link to="/planets/">Planets</router-link>
      </li>
      <li>
        <router-link to="/starships/">Starships</router-link>
      </li>
    </ul>

    <button
      class="btn btn-primary btn-sm"
      @click="changeButtonClick"
    >
      Change Service
    </button>
    <label class="ml-auto align-self-center">
      {{ swapiServiceTitle }}
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TheHeader',
};
</script>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { swapiServiceKey } from '@/context/swapi-service-context';
import SwapiService from '@/service/swapi-service';
import DummySwapiService from '@/service/dummy-swapi-service';

const emit = defineEmits(['changeService']);
const swapiService = inject(swapiServiceKey);
const swapiServiceTitle = computed(() =>
  swapiService?.value instanceof SwapiService
    ? 'Реальные данные'
    : 'Тестовые данные'
);
const changeButtonClick = () => {
  const Service =
    swapiService?.value instanceof SwapiService
      ? DummySwapiService
      : SwapiService;
  if (swapiService?.value) {
    swapiService.value = new Service();
  }
  emit('changeService');
};
</script>

<style scoped>
.header {
  margin-top: 0.5rem;
  padding-left: 10px;
}

.header ul li {
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 3px;
}

.header ul li:hover {
  background-color: #444;
}

.header a:hover {
  text-decoration: none;
}

.header h3 a {
  color: white;
}

.header h3 a:hover {
  color: #00bc8c;
}

.header button {
  height: 2.2rem;
  margin-top: 1px;
  margin-left: 3px;
}
</style>
