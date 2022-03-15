<template>
  <v-app>
    <v-bottom-navigation v-if="mobileBreakpoint" app color="secondary">
      <v-btn to="/" icon>
        <span>Inicio</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/projects" icon>
        <span>Proyectos</span>
        <v-icon>mdi-crane</v-icon>
      </v-btn>
      <v-btn to="/about" icon>
        <span>Acerca de</span>
        <v-icon>mdi-meditation</v-icon>
      </v-btn>
      <v-btn to="/stack" icon>
        <span>Stack</span>
        <v-icon>mdi-book-multiple</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-app-bar v-else class="px-2" app elevation="3" dense>
      <span class="app-title primary--text">Edgar Parucho</span>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" to="/" color="primary" text outlined rounded>
        <v-icon left>mdi-home</v-icon>
        Inicio
      </v-btn>
      <v-btn class="mx-1" to="/projects" color="primary" text rounded>
        <v-icon left>mdi-crane</v-icon>
        Proyectos
      </v-btn>
      <v-btn class="mx-1" to="/about" color="primary" text rounded>
        <v-icon left>mdi-meditation</v-icon>
        Acerca de
      </v-btn>
      <v-btn class="mx-1" to="/stack" color="primary" text rounded>
        <v-icon left>mdi-book-multiple</v-icon>
        Stack
      </v-btn>
    </v-app-bar>
    
    <v-main class="blob">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="aimate__animated animate__fadeOutRight"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    mobileBreakpoint () {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');
  .app-title {
    font-family: 'Comforter', cursive;
    font-size: 27px;
  }
  .blob {
    background-image: url('./assets/graphics/blob-haikei.svg');
    background-size: contain;
  }
  .blob-scene {
    background-image: url('./assets/graphics/blob-scene-haikei.svg');
    background-size: cover;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease-out;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>