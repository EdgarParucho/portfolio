<template>
  <v-container>

    <story-preview :story="story" />

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
import { mapState } from 'vuex'
import StoryPreview from '@/components/StoryPreview'
import Chapter from '@/components/Chapter'
export default {
  name: 'MantraStory',
  components: { StoryPreview, Chapter },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['stories']),
    isMobile () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    },
    story () {
      const storyPath = this.$router.currentRoute.params.title
      const storyContent = this.stories.find(story => story.path === storyPath)
      return storyContent
    }
  }
}
</script>
