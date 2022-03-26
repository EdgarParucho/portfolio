import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Stack from '../views/Stack.vue'
import Mantra from '../views/Mantra.vue'
import Background from '../views/Background.vue'
import Plans from '../views/Plans.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      section: false
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Más sobre mí',
      subtitle: 'Lo básico a nivel personal',
      icon: 'mdi-meditation',
      section: true
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Mi trabajo',
      subtitle: 'Conoce mis proyectos y experiencia',
      icon: 'mdi-crane',
      section: true
    },
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack,
    meta: {
      title: 'Mis habilidades',
      subtitle: 'Stack de desarrollo y herramientas',
      icon: 'mdi-book-multiple',
      section: true
    },
  },
  {
    path: '/mantra',
    name: 'Mantra',
    component: Mantra,
    meta: {
      section: false
    }
  },
  {
    path: '/background',
    name: 'Background',
    component: Background,
    meta: {
      section: false
    }
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
    meta: {
      section: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
