<template>
  <v-container>

    <v-row>
      <v-col :cols="isMobile ? 12 : 4">
        <story-preview :story="story" />
      </v-col>
    </v-row>

    <!-- <story-introduction :story="story" /> -->
    <v-row align="center">
      <v-col :cols="isMobile ? 12 : 6">
        <h1 class="display-3 mb-5">
          {{ story.subtitle }}
        </h1>
        <div class="subtitle-1">
          <p v-for="(paragraph, index) of story.introduction" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </v-col>
      <v-col :cols="isMobile ? 12 : 6">
        <v-img :src="story.cover"></v-img>
      </v-col>
    </v-row>

   <Chapter v-for="(chapter, index) of story.chapters" :chapter="chapter" :key="index" :isMobile="isMobile" :index="index" />

  </v-container>
</template>

<script>
import StoryPreview from '@/components/StoryPreview'
import Chapter from '@/components/Chapter'
import stories from '@/helpers/stories.js'
export default {
  name: 'MantraStory',
  components: { StoryPreview, Chapter },
  data () {
    return {
      stories
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    },
    story () {
      const current = this.$router.currentRoute.params.title
      const match = this.stories.find(story => story.path === current)
      return match
    }
  }
}
</script>
