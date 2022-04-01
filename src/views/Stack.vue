<template>
  <v-container>
    <!-- Story's preview card -->
    <section-preview :section="$router.history.current" />
    <!-- Chapters -->
   <Chapter v-for="(chapter, index) of story.chapters" :chapter="chapter" :key="index" :isMobile="isMobile" :index="index" />

  </v-container>
</template>

<script>
import SectionPreview from '@/components/SectionPreview'
import story from '@/helpers/stack.js'
import Chapter from '@/components/Chapter'
export default {
  name: 'Stack',
  components: { SectionPreview, Chapter },
  data () {
    return {
      story
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }
  }
}
</script>
