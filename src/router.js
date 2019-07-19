import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Room from './views/lists/RoomTableList.vue'
import Condominio from './views/pages/CondominioPage.vue'
import MeuCondominio  from './views/pages/CondominioEditPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/room',
          name: 'room',
          component: Room
        },
        {
          path: '/condominio',
          name: 'condominio',
          component: Condominio
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/meu-condominio',
          name: 'meu-condominio',
          component: MeuCondominio
        }
      ]
    }
  ]
})
