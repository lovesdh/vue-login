import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Rank from '@/views/Rank/index.vue'
import Upload from '@/views/upload/upload.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/',
      component: Login
    },
    {
      path:'/upload',
      component: Upload
    },
  ]
})

export default router
