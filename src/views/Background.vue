<template>
  <v-container class="page">
    <section-card :section="$router.history.current" />
    <v-row align="center">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img src="@/assets/graphics/prototyping-process-bro.svg" max-width="80%" eager ></v-img>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-sheet class="pa-1" elevation="3" rounded="xl">
        <v-card-subtitle class="display-1">
          Frontend
        </v-card-subtitle>
        <v-card-text>
          <p>
            El frontend representa la interfaz que maneja la interacción del cliente o usuario. La base de un proyecto a nivel de frontend puede
            resumirse a estructura, estilo y funcionalidad, por lo que es fundamental manejar de forma correcta la semántica con <strong>HTML</strong>, el
            diseño con <strong>CSS</strong> y la lógica a través de <strong>JavaScript</strong>.
          </p>
          <p>
            El frontend es comúnmente manejado con frameworks y librerías ya que estos proponen estructuras y herramientas
            orientadas a potenciar la eficiencia y escalabilidad. <strong>Vue JS</strong> es el framework de JavaScript que domino, con este construí
            <router-link to="projects">Mantra</router-link>. Me he involucrado y enamorado desde entonces con su ecosistema. En combinación con <strong>Vue
              Router</strong> para el enrutamiento, <strong>Vuex</strong> para manejar el estado y <strong>Vuetify</strong> para el diseño, he construido interfaces óptimas y atractivas.
          </p>
        </v-card-text>
        <div class="d-flex justify-space-around my-5">
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-html.svg"></v-img>
                </template>
                HTML
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-css.svg"></v-img>
                </template>
                CSS
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-js.svg"></v-img>
                </template>
                JavaScript
              </v-tooltip>
            </v-card>
          </div>
          <div class="d-flex justify-space-around my-5">
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-vue.svg"></v-img>
                </template>
                Vue JS
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/logo.svg"></v-img>
                </template>
                Vuetify
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-vue-router.png"></v-img>
                </template>
                Vue Router
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-vuex.png"></v-img>
                </template>
                Vuex
              </v-tooltip>
            </v-card>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-sheet class="pa-1" elevation="3" rounded="xl">
          <v-card-subtitle class="display-1">
            Backend
          </v-card-subtitle>
          <v-card-text>
            <p>
              El backend abarca la parte lógica que maneja las peticiones del cliente (frontend) devolviendo los datos o recursos requeridos.
              Tengo la capacidad de construir sistemas del lado del servidor con JavaScript gracias a <strong>Node JS</strong> y <strong>Express JS</strong>. En lo que a bases de
              datos se refiere, he trabajado con MySQL y <strong>MongoDB</strong>, siendo este último con el que actualmente acumulo experiencia y destreza.
            </p>
          </v-card-text>
          <div class="d-flex justify-space-around my-5">
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-node.svg"></v-img>
                </template>
                Node JS
              </v-tooltip>
            </v-card>
            <v-card class="text-center" color="white" width="40" height="40">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <span class="display-1 text--secondary" v-on="on">
                    ex
                  </span>
                </template>
                Express JS
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-mongodb.svg"></v-img>
                </template>
                Mongo DB
              </v-tooltip>
            </v-card>
          </div>
        </v-sheet>
        </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img max-width="80%" src="@/assets/graphics/programming-bro.svg"></v-img>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-img max-width="80%" src="@/assets/graphics/version-control-bro.svg"></v-img>
      </v-col>
      <v-col :cols="mobileBreakpoint ? 12 : 6">
        <v-sheet class="pa-1" elevation="3" rounded="xl">
          <v-card-subtitle class="display-1">
            Otras herramientas
          </v-card-subtitle>
          <v-card-text>
            <p>
              Los sistemas de control de versiones son herramientas que permiten a equipos de desarrollo establecer
              un flujo para garantizar que cada miembro trabaje de forma independiente, segura y simultánea sobre un mismo proyecto.
              <strong>Git</strong> y <strong>GitHub</strong> son las herramientas de mayor uso para controlar y sincronizar respectivamente
              los repositorios de proyectos.
            </p>
            <p>
              <strong>Notion</strong> es una de las herramientas que más utilizo en mi entorno, me apoyo en esta
              aplicación para organizar documentos sobre lo que estudio, mis proyectos, lecturas y temas similares. En cuanto a la gestión
              de proyectos, he manejado Trello y, más reciente y frecuentemente, <strong>Asana</strong>.
            </p>
          </v-card-text>
          <div class="d-flex justify-space-around my-5">
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-git.svg"></v-img>
                </template>
                Git
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-github.svg"></v-img>
                </template>
                GitHub
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-notion.svg"></v-img>
                </template>
                Notion
              </v-tooltip>
            </v-card>
            <v-card color="white">
              <v-tooltip color="accent" bottom>
                <template v-slot:activator=" { on }">
                  <v-img width="40" contain height="40" v-on="on" src="@/assets/graphics/logo-asana.svg"></v-img>
                </template>
                Asana
              </v-tooltip>
            </v-card>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionCard from '@/components/SectionCard.vue'
export default {
  components: { SectionCard },
  computed: {
    mobileBreakpoint () {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
    }
  }
}
</script>