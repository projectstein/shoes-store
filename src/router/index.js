import Checkout from '../components/checkout/checkout-index.vue'
import ReviewAndConfirmation from '../components/review-and-confirmation/review-and-confirmation-index.vue'
import Sneakers from '../components/sneakers/sneakers-index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sneakers',
    component: Sneakers
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/review-and-confirmation',
    name: 'ReviewAndConfirmation',
    component: ReviewAndConfirmation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
