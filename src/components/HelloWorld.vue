<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-2 blob" tile elevation="4" max-width="700">
          <v-avatar size="166">
              <v-img class="mt-2" height="250" src="@/assets/img/avatar3.png"></v-img>
          </v-avatar>
          <v-card-title>
            👋 Hola, soy&nbsp;<span class="accent--text">Edgar parucho</span>
          </v-card-title>
          <v-card-subtitle class="text-start">
            💘 Padre y esposo, 💻 desarrollador apasionado, 👨🏻‍🎓 autodidacta...
          </v-card-subtitle>
          <v-card-text class="text-start font-weight-bold">
            Dedico este espacio para compartirte un poco sobre mi identidad.
            <br>
            Si deseas construir algo o hablar conmigo, contáctame, estoy para servirte.
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-tooltip  v-for="link, i of links" :key="i" top color="info">
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon x-large color="accent">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-btn>
              </template>
              {{ link.name }}
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="space-between">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img max-width="80%" src="@/assets/graphics/developer-activity-bro.svg"></v-img>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 3">
        <v-row v-for="section, i of sections" :key="i">
          <v-col>
            <v-card dark align="end" color="primary" max-width="400">
              <v-icon color="white" size="100">{{ section.icon }}</v-icon>
              <v-card-title>
                {{ section.title }}
              </v-card-title>
              <v-card-subtitle class="white--text text-start">
                {{ section.subtitle }}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn class="pa-3" outlined rounded :to="section.to">
                  Ver más
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4" v-for="article, i of articles" :key="i">
        <v-card class="pa-2">
          <v-img :src="article.cover" max-height="410" />
          <v-card-title class="text-no-wrap">
            {{ article.title.main }}&nbsp;<span class="info--text">{{ article.title.keyword }}</span>
          </v-card-title>
          <v-card-text class="text-start">
            {{ article.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <a href="https://storyset.com/work">Work illustrations by Storyset</a> -->
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      links: [
        { icon: 'mdi-email', name: 'Correo' },
        { icon: 'mdi-linkedin', name: 'LinkedIn' },
        { icon: 'mdi-github', name: 'GitHub' }
      ],
      sections: [
        {
          title: 'Mi trabajo',
          subtitle: 'Conoce mis proyectos y experiencia',
          icon: 'mdi-crane',
          to: 'projects'
        },
        {
          title: 'Mis habilidades',
          subtitle: 'Stack de desarrollo y herramientas',
          icon: 'mdi-book-multiple',
          to: 'background'
        },
        {
          title: 'Más sobre mí',
          subtitle: 'Lo básico a nivel personal',
          icon: 'mdi-meditation',
          to: 'about'
        }
      ],
      articles: [
        {
          cover: require('@/assets/img/article_mantra.jpg'),
          title: { main: 'Lo que hice para', keyword: 'Microfilms Center' },
          description: 'El proyecto que cambió mi ruta'
        },
        {
          cover: require('@/assets/img/article_alliance.jpg'),
          title: { main: '¿Que busco en una', keyword: 'alianza?' },
          description: 'Lo que más valoro en una relación laboral'
        },
        {
          cover: require('@/assets/img/article_2022.jpg'),
          title: { main: 'Mis planes para el', keyword: '2022' },
          description: 'Lo que me propongo para el año en curso'
        },
        
      ]
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>
