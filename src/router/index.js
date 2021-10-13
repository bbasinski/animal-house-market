import Vue from 'vue'
import VueRouter from 'vue-router'
import Houses from '@/views/Houses'
import Category from "@/views/Category";
import Animals from "@/views/Animals";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
