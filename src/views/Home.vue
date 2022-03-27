<template>
  <v-container>
    <v-row>
      <v-col :align="mobileBreakpoint ? 'center' : 'start'">
        <home-card :mobileBreakpoint="mobileBreakpoint" />
      </v-col>
    </v-row>
    <v-row align="center" justify="space-between">
      <v-col :cols="mobileBreakpoint ? 12 : 8" :align="mobileBreakpoint ? 'center' : 'start'">
        <v-img max-width="80%" src="@/assets/graphics/developer-activity-bro.svg"></v-img>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 4" :align="mobileBreakpoint ? 'center' : 'start'">
        <section-card v-for="section, i of sections" :key="i" :section="section" />
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col :cols="mobileBreakpoint ? 12 : 4" v-for="article, i of articles" :key="i">
        <article-card :article="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import articles from '@/helpers/articles.js'
import HomeCard from '@/components/HomeCard.vue'
import SectionCard from '@/components/SectionCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
  export default {
    name: 'Home',
    components: { HomeCard, SectionCard, ArticleCard },
    data: () => ({
      articles
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      },
      sections () {
        return this.$router.options.routes.filter(section => section.meta.section === true)
      }
    }
  }
</script>
