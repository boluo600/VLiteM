import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router