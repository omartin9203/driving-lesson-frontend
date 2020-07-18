import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/components/layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        component: Home
      }
    ],
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@/components/layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        component: About
      }
    ],
    meta: {
      requiresAuth: false
    },
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
