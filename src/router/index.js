import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from "@/views/LoginVue";
import AddUser from "@/views/AddUser";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: LoginVue
  },
  {
    path: '/adduser',
    component: AddUser
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
