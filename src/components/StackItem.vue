<template>
  <v-container>
    <v-sheet class="pa-2" elevation="3" rounded="xl">
      <v-card-title>{{ stack.title }}</v-card-title>
      <v-card-text class="text--primary">
        <p v-for="paragraph, i of stack.paragraphs" :key="i">
          {{ paragraph }}
        </p>
      </v-card-text>
      <div class="d-flex justify-space-around my-5">
        <v-card v-for="technology, i of stack.technologies.primary" :key="i" color="white">
          <v-tooltip color="accent" bottom>
            <template v-slot:activator=" { on }">
              <v-img width="40" contain height="40" v-on="on" :src="technology.logo"></v-img>
            </template>
            {{ technology.name }}
          </v-tooltip>
        </v-card>
      </div>
      <div class="d-flex justify-space-around my-5">
        <v-card v-for="technology, i of stack.technologies.secondary" :key="i" color="white">
          <v-tooltip color="accent" bottom>
            <template v-slot:activator=" { on }">
              <v-img width="40" contain height="40" v-on="on" :src="technology.logo"></v-img>
            </template>
            {{ technology.name }}
          </v-tooltip>
        </v-card>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'AboutItem',
  props: ['stack']
}
</script>