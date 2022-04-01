import Vue from 'vue'
import Vuex from 'vuex'
import projects from '@/helpers/projects'
import stack from '@/helpers/stack'
import about from '@/helpers/about'
import mantra from '@/helpers/mantra'
import background from '@/helpers/background'
import management from '@/helpers/management'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sections: [projects, stack, about],
    stories: [mantra, background, management]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
