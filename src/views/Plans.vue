<template>
  <v-container>
    <v-row>
      <v-col :cols="mobileBreakpoint ? 12 : 4">
        <article-card :article="plansArticle" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <h1 class="display-3 mb-5">
          Del tiempo y los planes
        </h1>
        <div class="subtitle-1">
          <p>
            Fue cuando decidí hacer cambios en mi carrera que internalicé el valor del tiempo como recurso.
          </p>
          <p>
            Desde mi perspectiva, planificar y sistematizar pueden converger y resultar en metodologías reutilizables.
          </p>
          <p>
            Constantemente reflexiono sobre esto con el propósito de extraer lo más valioso de mi experiencia y diferentes fuentes de aprendizaje para extenderlo en forma de métodos, patrones o planes eficaces.
          </p>
          <p>
            Quiero transmitirte mi punto de vista para abordar el cambio de área y otros proyectos.
            <br>
            Etapas y pautas que valoro, estas definen la ruta que me he propuesto seguir y orientar a mis objetivos.
          </p>
        </div>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img src="@/assets/graphics/time-management-bro.svg"></v-img>
      </v-col>
    </v-row>
    <v-row v-for="(stage, key) of projectStages" :key="key">
      <v-col>
        <v-card elevation="2" rounded="xl">
          <v-chip class="mb-2 secondary" label large>
            {{ stage.title }}
          </v-chip>
          <v-row align="center">
            <v-col :cols="mobileBreakpoint ? 12 : 6" align="center">
              <v-avatar color="secondary lighten-1" size="300">
                <v-img contain :src="stage.image" />
              </v-avatar>
            </v-col>
            <v-col :cols="mobileBreakpoint ? 12 : 6">
              <v-card-text class="text--primary">
                <p v-for="(guideline, i) of stage.guidelines" :key="i">
                  <v-icon color="secondary" left small>mdi-label</v-icon>
                  {{ guideline }}
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projectStages from '@/helpers/projectStages.js'
import ArticleCard from '@/components/ArticleCard.vue'
import plansArticle from '@/helpers/plansArticle.js'
export default {
  name: 'Plans',
  components: { ArticleCard },
    data: () => ({
      plansArticle,
      projectStages,
      legend: {
        'Proyectos': 'primary',
        'Formación': 'info',
        'Personal': 'accent'
      }
    }),
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      }
    }
  }
</script>