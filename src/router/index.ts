import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PersonPage from '@/pages/PersonPage.vue';
import PlanetPage from '@/pages/PlanetPage.vue';
import StarshipPage from '@/pages/StarshipPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path: 'people/:id?',
        component: PersonPage,
      },
      {
        path: 'starships/:id?',
        component: StarshipPage,
      },
      {
        path: 'planets/:id?',
        component: PlanetPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
