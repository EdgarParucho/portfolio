<template>
  <v-container>
    <section-card :section="$router.history.current" />
    <v-row>
      <v-col cols="12">
        <v-card color="transparent" elevation="0">
          <v-card-title class="display-4">Mantra</v-card-title>
          <v-card-subtitle class="ml-2 headline">Para una gestión eficiente</v-card-subtitle>
          <v-row>
            <v-col
              v-for="image, k in images"
              :key="k"
              class="d-flex child-flex"
              :cols="mobileBreakpoint ? 12 : 3"
            >
              <v-card>
                <v-img
                  :src="image.src"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="mobileBreakpoint ? 12 : 6">
              <v-card-subtitle class="text-center headline">Acerca del proyecto</v-card-subtitle>
                <v-card-text class="text--primary">
                <v-card-subtitle class="title">¿De que se trata?</v-card-subtitle>
                <p class="pl-4">
                  Mantra es una aplicación web personalizada para la gestión del equipo de operaciones de Microfilms Center. A través de la app,
                  los usuarios manejan la información del servicio (soporte técnico) que provee la empresa.
                </p>
                <v-card-subtitle class="title">El objetivo</v-card-subtitle>
                <p class="pl-4">
                  Mejorar el sistema de gestión de la empresa a través de la automatización de procesos, integración de tareas manejadas en otras
                  herramientas y administración eficiente de la información..
                </p>
                <v-card-subtitle class="title">¿Que problemas resuelve?</v-card-subtitle>
                <p class="pl-4">
                  Mantra agrega valor a la información que administra gracias a una lógica del negocio bien abstraida y su interfaz grafica
                  orientada a enfocarse en lo necesario. Esto resulta en mejores tiempos y opciones para la toma de decisiones de los usuarios.
                  Los principales problemas resueltos se pueden clasificar de la siguiente forma:
                  <v-treeview :items="items"></v-treeview>
                </p>
                </v-card-text>

              </v-col>
              <v-col :cols="mobileBreakpoint ? 12 : 6">
                <v-card-subtitle class="text-center headline">Características generales</v-card-subtitle>
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
                      <v-icon>mdi-account-multiple</v-icon>
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
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionCard from '@/components/SectionCard.vue'

  export default {
    name: 'About',
    components: { SectionCard },
    data () {
      return {
        items: [
          {
            id: 1,
            name: 'Control de la información de valor',
            children: [
              { id: 1, name: 'Manejo de la información de reportes en sus diferentes estados.' },
              { id: 2, name: 'Registro de la información del servicio de mantenimiento en un sistema consistente.' },
              { id: 3, name: 'Capacidad de acumular documentación manteniendo una bitácora de cada reporte.' },
              { id: 4, name: 'Control de servicios por validar para certificar el cumplimiento y nivel de atención.' },
              { id: 5, name: 'Medios para administrar datos de clientes, oficinas, productos y piezas a través de la interfaz gráfica.' },
              { id: 6, name: 'Gestión de usuarios y roles a través de la interfaz gráfica.' },
              { id: 7, name: 'Control de la información de contratos de clientes en un sistema accesible para el equipo.' },
            ]
          },
          {
            id: 2,
            name: 'Automatización',
            children: [
              { id: 1, name: 'Cálculo de fechas de expiración según acuerdos establecidos con clientes.' },
              { id: 2, name: 'Búsqueda automática de servicios relacionados entre sí para decisiones de gestión acordes.' },
              { id: 3, name: 'Validaciones al registrar para evitar duplicidad e inconsistencias en función del historial en base de datos.' },
            ]
          },
          {
            id: 3,
            name: 'Trabajo en equipo',
            children: [
              { id: 1, name: 'Integración de todo el equipo involucrado en la gestión para centralizar la información del área.' },
              { id: 2, name: 'Sistema para comunicar rápida y eficientemente la información entre los involucrados.' },
            ]
          },
          {
            id: 4,
            name: 'Interfaz',
            children: [
              { id: 1, name: 'Tablas y campos de búsqueda para acceso rápido a la información' },
              { id: 2, name: 'Gráficas en múltiples vistas con indicadores de gestión.' },
              { id: 3, name: 'Formularios divididos en pasos y con sugerencias cálculadas en tiempo de escritura.' },
              { id: 4, name: 'Elementos en general minimizados a información de valor para el usuario.' },
            ]
          },
        ],
        images: [
          {
            src: require('@/assets/img/project_mantra_1.png')
          },
          {
            src: require('@/assets/img/project_mantra_2.png')
          },
          {
            src: require('@/assets/img/project_mantra_3.png')
          },
          {
            src: require('@/assets/img/project_mantra_4.png')
          },
        ],
      }
    },
    computed: {
      mobileBreakpoint () {
        return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
      }
    }
  }
</script>
