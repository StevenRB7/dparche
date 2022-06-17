import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstadosAnimoView from '../views/EstadosAnimoView.vue'
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
    name: 'registro',
    component: RegistroEventosView
  },
  {
    path: '/estadosanimo',
    name: 'estadosanimo',
    component: EstadosAnimoView
  }

]

const router = new VueRouter({
  routes
})

export default router
