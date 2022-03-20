<template>
  <v-container>
    <v-sheet class="pa-2" elevation="3" rounded="xl">
      <div class="justify-space-between d-flex">
        <v-avatar class="mx-1" color="primary" size="70">
          <v-icon x-large>{{ aspect.icon }}</v-icon>
        </v-avatar>
        <v-chip color="secondary" label>{{ aspect.label }}</v-chip>
      </div>
      <v-card-title>{{ aspect.title }}</v-card-title>
      <v-card-subtitle>{{ aspect.subtitle }}</v-card-subtitle>
      <v-card-text class="text--primary">
        <p v-for="paragraph, i of aspect.paragraphs" :key="i">
          {{ paragraph }}
        </p>
      </v-card-text>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'AboutItem',
  props: ['aspect']
}
</script>