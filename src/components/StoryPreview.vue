<template>
  <v-container>
    <v-card class="pa-2" elevation="5">
      <v-card-title class="display-1 font-weight-bold">
        {{ story.title.main }}&nbsp;<span class="info--text">{{ story.title.keyword }}</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1 text--primary">
        {{ story.subtitle }}
      </v-card-subtitle>
      <v-img :src="story.cover" max-height="410" eager />
      <v-card-actions>
        <v-btn v-if="$router.history.current.path === '/'" :to="`story/${story.path}`" color="secondary" block>
          Leer
        </v-btn>
        <v-btn v-else to="/" color="error" block text>
          Volver al inicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'StoryPreview',
  props: ['story']
}
</script>
