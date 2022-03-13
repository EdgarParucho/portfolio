<template>
  <v-container>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Cliente</v-list-item-title>
            <v-list-item-subtitle>Microfilms Center J.A.H.A., C.A.</v-list-item-subtitle>
            <v-alert color="info" text dark dense border="left">
              Empresa con una presencia importante en el sector financiero de Venezuela.
            </v-alert>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-target-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Usuario final</v-list-item-title>
            <v-list-item-subtitle>Analistas, Supervisor, Coordinador de Operaciones, Coordinador de Almacén y técnicos de campo</v-list-item-subtitle>
            <v-alert color="info" text dark dense border="left">
              Mantra también resolvió problemas de integración interdepartamental.
            </v-alert>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-link</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>URL</v-list-item-title>
            <v-list-item-subtitle>
              <a href="https://testing-mantra.herokuapp.com">
                testing-mantra.herokuapp.com
              </a>
            </v-list-item-subtitle>
            <v-alert color="info" text dark dense border="left">
              Ingresa a una versión de pruebas para explorar la experiencia e interfaz.
            </v-alert>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-laptop</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Tipo</v-list-item-title>
            <v-list-item-subtitle>PWA (Progressive Web Application)</v-list-item-subtitle>
            <v-alert color="info" text dark dense border="left">
              Se ejecuta en cualquier dispositivo con un navegador web.
            </v-alert>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-language-javascript</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Tecnología</v-list-item-title>
            <v-list-item-subtitle>Tecnologías principales: MongoDB, Express, Vue JS y Node JS</v-list-item-subtitle>
            <v-alert color="info" text dark dense border="left">
              Basado en el Stack MEVN. Incluye Vuetify, Chart JS, JWT, Bcrypt y Axios como dependencias.
            </v-alert>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectSpecs',
  props: ['project']
}
</script>