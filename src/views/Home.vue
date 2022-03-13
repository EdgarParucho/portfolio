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
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4" v-for="article, i of articles" :key="i">
        <article-card :article="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeCard from '@/components/HomeCard.vue'
import SectionCard from '@/components/SectionCard.vue'
import ArticleCard from '@/components/ArticleCard.vue'
  export default {
    name: 'Home',
    components: { HomeCard, SectionCard, ArticleCard },
    data: () => ({
      articles: [
        {
          cover: require('@/assets/img/article_mantra.jpg'),
          title: { main: 'Lo que hice en Venezuela para', keyword: 'Microfilms Center' },
          description: 'El proyecto que cambió mi ruta'
        },
        {
          cover: require('@/assets/img/article_alliance.jpg'),
          title: { main: '¿Que busco en una', keyword: 'alianza?' },
          description: 'Lo que más valoro en una relación laboral'
        },
        {
          cover: require('@/assets/img/article_2022.jpg'),
          title: { main: 'Mis planes para el', keyword: '2022' },
          description: 'Lo que me propongo para el año en curso'
        }
      ]
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      },
      sections () {
        return this.$router.options.routes.filter(section => section.path !== '/')
      }
    }
  }
</script>
