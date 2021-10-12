import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeList from "@/views/HomeList";
import Category from "@/views/Category";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeList',
    component: HomeList
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
