import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Propose from '../views/Propose.vue'
import QuestionList from '../views/QuestionList.vue'
import Donate from '../views/Donate.vue'
import Payment from '../views/Payment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/propose',
    name: 'propose',
    component: Propose
  },
  {
    path: '/questionList',
    name: 'questionList',
    component: QuestionList
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/donate/:id',
    name: 'donate',
    component: Donate
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
