import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
// Lazy load all views
// import HomePage from '../views/HomePage.vue';
// import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/archives',
    name: 'Archives',
    // Lazy-loaded component
    component: () => import('../views/YearPage.vue'),
  },
  {
    path: '/year/:year',
    name: 'YearDetail',
    component: () => import('../views/YearPage.vue'),
    props: (route: RouteLocationNormalized) => ({ year: Number(route.params.year) }),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
