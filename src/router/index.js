import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Stack from '../views/Stack.vue'
// import MantraStory from '../views/MantraStory.vue'
// import BackgroundStory from '../views/BackgroundStory.vue'
// import ManagementStory from '../views/ManagementStory.vue'
import Story from '../views/Story.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      type: 'index'
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Proyectos',
      subtitle: 'Conoce mi trabajo y experiencia',
      icon: 'mdi-crane',
      type: 'section'
    },
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack,
    meta: {
      title: 'Stack',
      subtitle: 'Conocimientos y herramientas técnicas',
      icon: 'mdi-book-multiple',
      type: 'section'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Acerca de mí',
      subtitle: 'Lo básico a nivel personal',
      icon: 'mdi-meditation',
      type: 'section'
    },
  },
  // {
  //   path: '/mantra',
  //   name: 'MantraStory',
  //   component: MantraStory,
  //   meta: {
  //     type: 'story'
  //   }
  // },
  // {
  //   path: '/background',
  //   name: 'BackgroundStory',
  //   component: BackgroundStory,
  //   meta: {
  //     type: 'story'
  //   }
  // },
  // {
  //   path: '/management',
  //   name: 'ManagementStory',
  //   component: ManagementStory,
  //   meta: {
  //     type: 'story'
  //   }
  // },
  {
    path: '/story/:title',
    name: 'Stories',
    component: Story,
    meta: {
      type: 'story'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
