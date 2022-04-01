<template>
  <v-container>
    <v-row align="center" justify="space-between">

      <!-- Chapter's illustration -->

      <v-col
        :cols="isMobile ? 12 : 6"
        :order="isMobile ? 0 : index % 2"
        :align="isMobile ? 'center' : 'start'"
      >
        <v-img max-width="80%" eager :src="chapter.graphic" />
      </v-col>

      <!-- Chapter's card -->

      <v-col :cols="isMobile ? 12 : 6" align="start">
        <v-card class="pa-2" elevation="3" rounded="xl">
          <div class="d-flex justify-end">
            <v-avatar v-if="chapter.icon" color="primary" size="70">
              <v-icon x-large>{{ chapter.icon }}</v-icon>
            </v-avatar>
          </div>
          <v-card-title :class="isMobile ? 'title text-center' : 'display-3'">
            {{ chapter.title }}
          </v-card-title>
          <v-card-text class="text--primary">
            <div v-for="(subject, i) of chapter.subjects" :key="i">
              <h3 class="mb-5">
                {{ subject.about }}
              </h3>
              <p v-for="(paragraph, n) of subject.paragraphs" :key="n">
                {{ paragraph }}
              </p>
            </div>
          </v-card-text>
        </v-card>

        <!-- Chapter's quote -->

        <blockquote v-if="chapter.quote" class="mt-10">
          <span class="title font-italic">{{ chapter.quote.text }}</span>
          <br>
          <span class="subtitle-1">{{ chapter.quote.author }}</span>
        </blockquote>

        <!-- Chapter's images -->

        <v-row v-if="chapter.images" class="mt-5" justify="space-between">
          <v-col
            v-for="(img, i) of chapter.images"
            :key="i"
            :cols="isMobile ? img.sm : img.md
            "
          >
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
export default {
  name: 'Chapter',
  props: ['chapter', 'isMobile', 'index'],
  data () {
    return {
      overlay: false
    }
  }
}
</script>
