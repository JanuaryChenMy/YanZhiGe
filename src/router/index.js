import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/1.vue'
import Two from '../views/2.vue'
import Three from '../views/3.vue'
import Four from '../views/4.vue'
import Five from '../views/5.vue'
import Six from '../views/6.vue'
import Seven from '../views/7.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/One',
    name: 'One',
    component: One
  },
  {
    path: '/Two',
    name: 'Two',
    component: Two
  },
  {
    path: '/Three',
    name: 'Three',
    component: Three
  },
  {
    path: '/Four',
    name: 'Four',
    component: Four
  },
  {
    path: '/Five',
    name: 'Five',
    component: Five
  },
  {
    path: '/Six',
    name: 'Six',
    component: Six
  },
  {
    path: '/Seven',
    name: 'Seven',
    component: Seven
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
