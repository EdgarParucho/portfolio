import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Background from '../views/Background.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'aimate__animated animate__fadeOutRight',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      enterClass: 'animate__animated animate__fadeInUp',
      leaveClass: 'aimate__animated animate__fadeOutRight',
      title: 'Más sobre mí',
      subtitle: 'Lo básico a nivel personal',
      icon: 'mdi-meditation'
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'aimate__animated animate__fadeOutRight',
      title: 'Mi trabajo',
      subtitle: 'Conoce mis proyectos y experiencia',
      icon: 'mdi-crane'
    },
  },
  {
    path: '/background',
    name: 'Background',
    component: Background,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'aimate__animated animate__fadeOutRight',
      title: 'Mis habilidades',
      subtitle: 'Stack de desarrollo y herramientas',
      icon: 'mdi-book-multiple'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
