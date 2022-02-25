<template>
  <v-container>
    <v-card dark align="end" color="primary" max-width="400">
      <v-icon color="white" size="100">mdi-meditation</v-icon>
      <v-card-title>
        Más sobre mí
      </v-card-title>
      <v-card-subtitle class="white--text text-start">
        Lo básico a nivel personal
      </v-card-subtitle>
    </v-card>
    <v-row align="center">
      <v-col :cols="mobile ? 12: 6">
        <v-img src="@/assets/graphics/parents-bro.svg"></v-img>
      </v-col>
      <v-col>
        <v-card class="pa-2" max-width="600">
          <div class="justify-space-between d-flex">
            <v-avatar class="mx-1" color="primary" size="70">
              <v-icon x-large>mdi-ring</v-icon>
            </v-avatar>
            <v-chip color="secondary" label>Familia</v-chip>
          </div>
          <v-card-title>Lo primero en mi escala de valores</v-card-title>
          <v-card-subtitle>Esposo de Liz y padre de Leah</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>
              Me convertí en esposo y padre en el 2016. Desde entonces, cada decisión importante
              parte y orbita alrededor de este aspecto.
            </p>
            <p>
              Liz tiene 27, es Ingeniero de Sistemas. Entre tanto, he aprendido que las diferencias y
              semejanzas pueden ser positivamente poderosas si harmonizan y que trabajar en
              equipo es necesario, no opcional.
            </p>
            <p>
              Leah tiene 5, está en tercer nivel. Ella es solo pureza, la muestra de que todo se puede aprender.
              Considero que no hay un obstáculo justificable en nuestro camino cuándo hacemos algo por nuestros hijos.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-card class="pa-2" max-width="600">
          <div class="justify-space-between d-flex">
            <v-avatar class="ma-3" color="primary" size="70">
              <v-icon x-large>mdi-laptop</v-icon>
            </v-avatar>
            <v-chip color="secondary" label>Área de desempeño</v-chip>
          </div>
          <v-card-title>
            Soy desarrollador web
          </v-card-title>
          <v-card-subtitle>
            Puedo crear y mejorar sitios o aplicaciones que funcionan en el navegador.
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <p>
              Crear interfaces amigables y sistemas lógicos eficientes se convirtió en mi pasión.
            </p>
            <p>
              Convertirme en desarrollador siempre fue un objetivo. Aunque fueron varios años y
              circunstancias extraordinarias las que me llevaron a ejercer, ahora he aprendido a
              construir mi futuro con acciones y decisiones enfocadas en mis objetivos.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="mobile ? 12: 6">
        <v-img src="@/assets/graphics/website-creator-bro.svg"></v-img>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col :cols="mobile ? 12: 6">
        <v-img src="@/assets/graphics/critical-thinking-bro-1.svg"></v-img>
      </v-col>
      <v-col>
        <v-card class="pa-2" max-width="600">
          <div class="justify-space-between d-flex">
            <v-avatar class="mx-1" color="primary" size="70">
              <v-icon x-large>mdi-lightbulb-on</v-icon>
            </v-avatar>
            <v-chip color="secondary" label>Soft skills</v-chip>
          </div>
          <v-card-title>Lo que transmito a mi entorno y proyectos</v-card-title>
          <v-card-subtitle>Características no técnicas</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>
              Organización. Para fluir en mi espacio y facilitar autoevaluaciones.
            </p>
            <p>
              Innovación. Siempre alerta a nuevas y mejores formas de hacer las cosas.
            </p>
            <p>
              Productividad. Oriento mi enfoque en tareas con dirección al objetivo.
            </p>
            <p>
              Autodisciplina. Fundamental para lograr mis objetivos y la mejora continua.
            </p>
            <p>
              Teamwork. Tan necesario como poderoso en términos de resultados y crecimiento.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'About',

    components: {
    },
    computed: {
      mobile () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
