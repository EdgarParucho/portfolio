<template>
  <v-container>
    <v-card-text class="text--primary">
      <v-card-subtitle class="title">¿De que se trata?</v-card-subtitle>
      <p class="pl-4">
        {{ project.description }}
      </p>
      <v-card-subtitle class="title">El objetivo</v-card-subtitle>
      <p class="pl-4">
        {{ project.objective }}
      </p>
      <v-card-subtitle class="title">¿Que problemas resuelve?</v-card-subtitle>
      <p class="pl-4">
        {{ project.solutions.overview }}
        <v-treeview :items="project.solutions.classification"></v-treeview>
      </p>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectAbout',
  props: ['project']
}
</script>