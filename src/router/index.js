import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import users from '@/views/users/users.vue'
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
        component: () => users,
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
  }
})
export default router