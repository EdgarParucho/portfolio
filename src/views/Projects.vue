<template>
  <v-container>
    <section-preview :section="projects" />
    <div v-for="project, k of projects.items" :key="k">
      <h1 class="display-4">{{ project.title }}</h1>
      <h4 class="ml-2 headline">{{ project.subtitle }}</h4>
      <v-row>
        <v-col
          class="d-flex child-flex"
          :cols="isMobile ? 12 : 3"
          v-for="image, k in project.images"
          :key="k"
        >
          <v-card class="d-flex pa-2">
            <v-img class="grey lighten-2" :src="image.src" :aspect-ratio="image.ratio">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="isMobile ? 12 : 6">
          <v-card-subtitle class="text-center headline">Acerca del proyecto</v-card-subtitle>
          <project-about :project="project"></project-about>
        </v-col>
        <v-col :cols="isMobile ? 12 : 6">
          <v-card-subtitle class="text-center headline">Características generales</v-card-subtitle>
          <project-specs :project="project"></project-specs>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import projects from '@/helpers/projects.js'
import SectionPreview from '@/components/SectionPreview.vue'
import ProjectAbout from '@/components/ProjectAbout.vue'
import ProjectSpecs from '@/components/ProjectSpecs.vue'

  export default {
    name: 'Projects',
    components: { SectionPreview, ProjectAbout, ProjectSpecs },
    data () {
      return {
        projects
      }
    },
    computed: {
      isMobile () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
