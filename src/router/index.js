import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Story from '../views/Story.vue'
import Stack from '../views/Stack.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/story/:title',
    name: 'Stories',
    component: Story,
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      y: 0,
      behavior: 'smooth',
    }
  }
})
// router.afterEach((to, from, next) => {
//   window.scrollTo(0,0)
//   next()
// })

export default router
