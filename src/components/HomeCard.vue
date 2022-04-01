<template>
  <v-container>
    <v-card class="pa-2 blob-scene" tile elevation="4" max-width="700">
      <div class="d-flex justify-end">
        <v-avatar size="185" color="#eee">
          <v-img class="mt-2" height="290" contain src="@/assets/img/avatar.png"></v-img>
        </v-avatar>
      </div>
      <v-card-title>
        Hola, soy&nbsp;<span class="primary--text">Edgar Parucho</span>
      </v-card-title>
      <v-card-subtitle class="text-start">
        💘 Padre+esposo enamorado, 💻 desarrollador apasionado, 👨🏻‍🎓 estudiante incansable
      </v-card-subtitle>
      <v-card-text class="text-start font-weight-bold">
        Dedico este espacio para compartirte un poco sobre mi identidad.
        <br>
        Si deseas construir algo o hablar conmigo, estoy para servirte.
      </v-card-text>
      <v-card-actions class="justify-start">
        <v-tooltip  v-for="link, i of links" :key="i" bottom color="secondary">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon :large="mobileBreakpoint" :x-large="!mobileBreakpoint" :href="link.to" target="_blank" color="secondary">
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </template>
          {{ link.id }}
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeCard',
    props: ['mobileBreakpoint'],
    data: () => ({
      links: [
        { icon: 'mdi-linkedin', id: 'linkedin.com/in/parucho', to: 'https://www.linkedin.com/in/parucho/' },
        { icon: 'mdi-github', id: 'github.com/EdgarParucho', to: 'https://github.com/EdgarParucho' },
        { icon: 'mdi-email', id: 'parucho.edgar@outlook.es', to: 'mailto:parucho.edgar@outlook.es' }
      ]
    })
  }
</script>
