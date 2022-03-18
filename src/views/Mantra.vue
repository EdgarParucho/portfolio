<template>
  <v-container>
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4">
        <article-card :article="mantraArticle" />
      </v-col>
    </v-row>
    <v-row
       v-for="stage, i of mantraArticle.stages" :key="i"
       align="center" justify="space-between"
      >
      <v-col
        :cols="mobileBreakpoint ? 12 : 6"
        :align="mobileBreakpoint ? 'center' : 'start'"
        :order="i%2"
      >
        <v-img max-width="80%" eager :src="stage.img" />
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6" :align="mobileBreakpoint ? 'center' : 'start'">
        <h2 class="display-3 mb-5">{{ stage.title }}</h2>
        <v-sheet class="pa-2" elevation="3" rounded="xl">
          <v-div v-for="subject, k of stage.subjects" :key="k">
            <v-card-text class="text--primary">
              <h3>{{ subject.subtitle }}</h3>
              {{ subject.text }}
            </v-card-text>
          </v-div>
        </v-sheet>
        <blockquote class="mt-10 headline text--secondary">
          <span>{{ stage.quote }}</span>
        </blockquote>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import mantraArticle from '@/helpers/mantraArticle.js'
  export default {
    name: 'Mantra',
    components: { ArticleCard },
    data: () => ({
      mantraArticle
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>
  