import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroEventosView from '../views/Eventos/RegistroEventosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'home',
    component: RegistroEventosView
  }

]

const router = new VueRouter({
  routes
})

export default router
