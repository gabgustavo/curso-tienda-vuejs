import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    //component: () => import('@/views/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/LoginApp.vue')
      }

    ]
  },

  {
    path: '/collaborators',
    name: 'collaborators',
    redirect: { name: 'create' },
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: () => import('@/views/colaboradores/IndexColaboradorApp.vue')
      },
      {
        path: 'create',
        name: 'user-create',
        component: () => import('@/views/colaboradores/CreateColaboradorApp.vue')
      }

    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
