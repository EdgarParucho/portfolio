<template>
  <v-app>
    <v-main class="blob">
      <v-app-bar app elevation="3" dense>
        <span class="app-title primary--text">Edgar Parucho</span>
        <v-spacer></v-spacer>
        <v-btn class="mx-1" to="/" color="primary" icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn class="mx-1" to="/projects" color="primary" icon>
          <v-icon>mdi-crane</v-icon>
        </v-btn>
        <v-btn class="mx-1" to="/about" color="primary" icon>
          <v-icon>mdi-meditation</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');
  .app-title {
    font-family: 'Comforter', cursive;
    font-size: 27px;
  }
  .blob {
    background-image: url('./assets/graphics/blob-scene-haikei.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>