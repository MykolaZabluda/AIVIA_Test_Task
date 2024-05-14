import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/game',
    name: 'game',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Game.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
