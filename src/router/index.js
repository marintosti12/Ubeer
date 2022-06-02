import { createRouter, createWebHistory } from 'vue-router'
import Brewery from '../views/Brewery.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Admin from '../views/admin/dashboard'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/brewery-info/:id',
    name: 'brewery-info',
    component: Brewery,
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: Cart,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Admin,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
