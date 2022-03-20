<template>
  <v-container>
    <v-card class="pa-2" elevation="5">
      <v-img :src="article.cover" max-height="410" eager />
      <v-card-title class="subtitle-1 font-weight-bold">
        {{ article.title.main }}&nbsp;<span class="secondary--text">{{ article.title.keyword }}</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1">
        {{ article.subtitle }}
      </v-card-subtitle>
      <v-card-text>
        {{ article.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="$router.history.current.path === '/'" :to="article.path" color="secondary" block>
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
  name: 'ArticleCard',
  props: ['article']
}
</script>
