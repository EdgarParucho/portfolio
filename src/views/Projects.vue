<template>
  <v-container>
    <section-card :section="$router.history.current" />
    <div v-for="project, k of projects" :key="k">
      <h1 class="display-4">{{ project.title }}</h1>
      <h4 class="ml-2 headline">{{ project.subtitle }}</h4>
      <v-row>
        <v-col
          class="d-flex child-flex"
          :cols="mobileBreakpoint ? 12 : 3"
          v-for="image, k in project.images"
          :key="k"
        >
          <project-image :image="image"></project-image>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="mobileBreakpoint ? 12 : 6">
          <v-card-subtitle class="text-center headline">Acerca del proyecto</v-card-subtitle>
          <project-about :project="project"></project-about>
        </v-col>
        <v-col :cols="mobileBreakpoint ? 12 : 6">
          <v-card-subtitle class="text-center headline">Características generales</v-card-subtitle>
          <project-specs :project="project"></project-specs>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import projects from '@/helpers/projects.js'
import SectionCard from '@/components/SectionCard.vue'
import ProjectImage from '@/components/ProjectImage.vue'
import ProjectAbout from '@/components/ProjectAbout.vue'
import ProjectSpecs from '@/components/ProjectSpecs.vue'

  export default {
    name: 'Projects',
    components: { SectionCard, ProjectImage, ProjectAbout, ProjectSpecs },
    data () {
      return {
        projects
      }
    },
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
