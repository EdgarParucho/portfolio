<template>
  <v-container>
    <v-card class="pa-2" elevation="5" disabled>
      <v-img :src="article.cover" max-height="410" />
      <v-card-title class="subtitle-1 font-weight-bold">
        {{ article.title.main }}&nbsp;<span class="info--text">{{ article.title.keyword }}</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1">
        {{ article.description }}
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: ['article']
}
</script>
