<template>
  <v-container>
    <v-card class="my-5" dark align="end" color="primary" max-width="400">
      <v-icon color="white" size="100">{{ section.meta.icon }}</v-icon>
      <v-card-title>
        {{ section.meta.title }}
      </v-card-title>
      <v-card-subtitle class="white--text text-start">
        {{ section.meta.subtitle }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn v-if="$router.history.current.path === '/'" outlined :to="section.path" block>
          Ver más
        </v-btn>
        <v-btn v-else outlined to="/" block>
          Volver al inicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SectionCard',
  props: ['section']
}
</script>
