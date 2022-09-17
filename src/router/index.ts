import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})

export default router