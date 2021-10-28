import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DirectRoute from '../views/DirectRoute.vue'
import DirectPathByRoute from "@/views/DirectPathByRoute";
//路由，指定页面跳转
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/directroute',
    name: 'DirectRoute',
    component: DirectRoute,
  },  {
    path: '/directpathbyroute',
    name: 'DirectPathByRoute',
    component: DirectPathByRoute,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
