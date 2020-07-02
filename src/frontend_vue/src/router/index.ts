import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomePage from '../views/pages/HomePage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // api для разработки, набор SVG иконок
    path: '/api/svg',
    name: 'all-icons-page',
    component: () => import('../components/icons/AllIconsPage.vue'),
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/pages/CategoriesPage.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/pages/LoginPage.vue'),
    meta: { layout: 'DefaultLayout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
