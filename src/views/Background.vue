<template>
  <v-container>
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4">
        <article-card :article="backgroundArticle" />
      </v-col>
    </v-row>
    <v-img class="mx-auto" src="@/assets/graphics/under-construction-bro.svg" width="50%"></v-img>
  </v-container>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import backgroundArticle from '@/helpers/backgroundArticle.js'
  export default {
    name: 'Background',
    components: { ArticleCard },
    data: () => ({
      backgroundArticle
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>
  