import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import TerminosView from '../views/TerminosView.vue'
import PoliticaView from '../views/PoliticaVuew.vue'
import ReservacionesForm from '../components/ReservacionesForm.vue'
import LoginView from '../views/LoginView.vue'
import ReservacionView from '../views/ReservacionView.vue'
import FilterView from '../views/FilterView.vue'
import DrinkView from '../views/DrinkView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { notFound: true }
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/terminos',
    name: 'TerminosView',
    component: TerminosView
  },
  {
    path: '/politica',
    name: 'PoliticaView',
    component: PoliticaView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/reservaciones',
    name: 'ReservacionesForm',
    component: ReservacionesForm
  },
  {
    path: '/reservacion',
    name: 'ReservacionesView',
    component: ReservacionView
  },
  {
    path: '/menu_list',
    name: 'FilterView',
    component: FilterView
  },
  { 
    path: '/menu_list/drink/:id',
    name: "DrinkView", 
    component: DrinkView, 
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
