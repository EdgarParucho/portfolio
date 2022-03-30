<template>
  <v-container>
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4">
        <article-card :article="article" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <h1 class="display-3 mb-5">
          La educación es el camino
        </h1>
        <div class="subtitle-1">
          <p>
            La educación es una puerta hacia una versión más capaz del ser humano.
          </p>
          <p>
            Cuando inicié en el desarrollo web ignoraba basicamente todo. Sin tener una guía, mi ruta se formó de manera reactiva.
            En otras palabras, fue como saber a donde quería llegar sin saber como. La educación es ahora fundamental en mi vida.
          </p>
          <p>
            Aunque casi cualquier experiencia es una fuente potencial para aprender algo, quiero reflejar los principales medios
            que me funcionan y a los que dedico este aspecto.
          </p>
        </div>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img src="@/assets/graphics/on-the-way-bro.svg"></v-img>
      </v-col>
    </v-row>
    <v-row v-for="card, i of article.cards" :key="i" align="center" justify="space-between">
      <v-col
        :cols="mobileBreakpoint ? 12 : 6"
        :order="mobileBreakpoint ? 0 : i % 2"
        :align="mobileBreakpoint ? 'center' : 'start'"
      >
        <v-img max-width="80%" eager :src="card.img" />
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6" align="start">
        <v-card class="pa-2" elevation="3" rounded="xl">
          <v-card-title :class="mobileBreakpoint ? 'title text-center' : 'display-3 text-center'">
            {{ card.title }}
          </v-card-title>
          <div v-for="paragraph, n of card.paragraphs" :key="n">
            <v-card-text class="text--primary">
              <h3 class="heading">{{ paragraph.subject }}</h3>
              {{ paragraph.body }}
            </v-card-text>
          </div>
        </v-card>
        <v-row class="mt-5" justify="center">
          <v-col v-for="(img, i) of card.imgs" :key="i" :cols="mobileBreakpoint ? 5 : 2">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card elevation="3">
                  <v-img :src="img.path" :aspect-ratio="img.scale || 1" :alt="img.name" />
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover && img.link"
                      color="secondary"
                      absolute
                    >
                      <v-btn :href="img.link" target="_blank" x-small color="secondary">
                        {{ img.name }}
                        <v-icon right>mdi-link</v-icon>
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import backgroundArticle from '@/helpers/backgroundArticle.js'
  export default {
    name: 'Background',
    components: { ArticleCard },
    data: () => ({
      article: backgroundArticle,
      overlay: false
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>
  