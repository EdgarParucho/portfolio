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
        :order="mobileBreakpoint ? 0 : i % 2"
      >
        <v-img max-width="80%" eager :src="stage.img" />
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6" align="start">
        <v-card class="pa-2" elevation="3" rounded="xl">
          <v-card-title :class="mobileBreakpoint ? 'title text-center' : 'display-3 text-center'">
            {{ stage.title }}
          </v-card-title>
          <div v-for="subject, k of stage.subjects" :key="k">
            <v-card-text class="text--primary">
              <h3 class="heading">{{ subject.subtitle }}</h3>
              {{ subject.text }}
            </v-card-text>
          </div>
        </v-card>
        <blockquote class="mt-10">
          <span class="title font-italic">{{ stage.quote.cite }}</span>
          <br>
          <span class="subtitle-1">{{ stage.quote.author }}</span>
        </blockquote>
      </v-col>
    </v-row>

    <v-alert class="mt-15" icon="mdi-microsoft-excel" color="primary" dark>
      Algunos ejemplos de los libros de Excel mencionados
    </v-alert>
    <v-row>
      <v-col
        class="d-flex child-flex"
        :cols="mobileBreakpoint ? 12 : 3"
        v-for="image, k in images"
        :key="k"
      >
        <project-image :image="image"></project-image>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectImage from '@/components/ProjectImage.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import mantraArticle from '@/helpers/mantraArticle.js'
  export default {
    name: 'Mantra',
    components: { ArticleCard, ProjectImage },
    data: () => ({
      mantraArticle,
      images: [
        { src: require('@/assets/img/excel_sample_6.png'), ratio: 1.3 },
        { src: require('@/assets/img/excel_sample_10.png'), ratio: 1.3 },
        { src: require('@/assets/img/excel_sample_8.png'), ratio: 1.3 },
        { src: require('@/assets/img/excel_sample_9.png'), ratio: 1.3 },
      ]
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>
  