<template>
  <v-container>
    <v-row>
      <v-col :align="isMobile ? 'center' : 'start'">
        <home-card :isMobile="isMobile" />
      </v-col>
    </v-row>
    <v-row align="center" justify="space-between">
      <v-col :cols="isMobile ? 12 : 8" :align="isMobile ? 'center' : 'start'">
        <v-img eager max-width="80%" src="@/assets/graphics/developer-activity-bro.svg"></v-img>
      </v-col>
      <v-col :cols="isMobile ? 12 : 4" :align="isMobile ? 'center' : 'start'">
        <section-preview v-for="section, i of sections" :key="i" :section="section" />
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col v-for="story, i of stories" :key="i" :cols="isMobile ? 12 : 4">
        <story-preview :story="story" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import stories from '@/helpers/stories.js'
// import sections from '@/helpers/sections.js'
// import projects from '@/helpers/projects.js'
import HomeCard from '@/components/HomeCard.vue'
import SectionPreview from '@/components/SectionPreview.vue'
import StoryPreview from '@/components/StoryPreview.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { HomeCard, SectionPreview, StoryPreview },
  data: () => ({
    // stories,
    // sections,
    // projects
  }),
  computed: {
    ...mapState(['sections', 'stories']),
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }
  },
  // created () {
  //   this.sections.unshift(projects)
  // }
}
</script>
