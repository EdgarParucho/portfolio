<template>
  <v-app>
    <v-bottom-navigation v-if="mobileBreakpoint" app color="primary">
      <v-btn to="/" icon>
        <span>Inicio</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-for="section, i of sections" :key="i" :to="section.path" icon>
        <span>{{ section.meta.title }}</span>
        <v-icon>{{ section.meta.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-app-bar v-else class="px-2" app elevation="3" dense>
      <span class="app-title primary--text">Edgar Parucho</span>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" to="/" color="primary" outlined rounded>
        <v-icon left>mdi-home</v-icon>
        Inicio
      </v-btn>
      <v-btn
        v-for="section, i of sections"
        :key="i"
        :to="section.path"
        :outlined="$router.history.current.path !== section.path"
        class="mx-1"
        color="primary"
        rounded
      >
        <v-icon left>{{ section.meta.icon }}</v-icon>
        {{ section.meta.title }}
      </v-btn>
    </v-app-bar>
    
    <v-main class="blob">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
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
    },
    sections () {
      return this.$router.options.routes.filter(route => route.meta.type === 'section')
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
    background-size: 100vw;
  }
  .blob-scene {
    background-image: url('./assets/graphics/blob-scene-haikei.svg');
    background-size: 100vw;
    background-size: cover;
  }
</style>