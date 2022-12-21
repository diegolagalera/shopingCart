import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopingCart from '../views/ShopingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopingCart',
    component: ShopingCart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
