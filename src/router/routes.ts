import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LandingPage.vue'),
        name: 'home',
      },
      {
        path: 'advertise',
        component: () => import('pages/AdvertisesPage.vue'),
        name: 'advertises',
      },
      {
        path: 'advertise/:id',
        component: () => import('pages/_id.vue'),
        name: 'showPost',
      },
    ],
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    name: 'login',
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
