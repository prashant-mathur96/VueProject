import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Users',
    component: DefaultLayout,
    redirect: '/users/users',
    children: [
      {
        path: '/users',
        name: 'Users',
        redirect: '/users/users',
      },
      {
        path: '/users/users',
        name: 'Users',
        component: () => import('@/views/users/users.vue'),
      },
      {
        path: '/users/add-user',
        name: 'add-user',
        component: () => import('@/views/users/add-user.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
