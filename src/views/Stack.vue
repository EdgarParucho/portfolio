<template>
  <v-container>
    <!-- Story's preview card -->
    <section-preview :section="section" />
    <!-- Chapters -->
   <Chapter v-for="(chapter, index) of section.chapters" :chapter="chapter" :key="index" :isMobile="isMobile" :index="index" />

  </v-container>
</template>

<script>
import SectionPreview from '@/components/SectionPreview'
import section from '@/helpers/stack.js'
import Chapter from '@/components/Chapter'
export default {
  name: 'Stack',
  components: { SectionPreview, Chapter },
  data () {
    return {
      section
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }
  }
}
</script>
