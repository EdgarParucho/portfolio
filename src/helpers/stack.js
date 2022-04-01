export default {
  path: '/stack',
  title: 'Stack',
  subtitle: 'Conocimientos y herramientas técnicas',
  icon: 'mdi-book-multiple',
  cover: null,
  chapters: [
    {
      graphic: require('@/assets/graphics/prototyping-process-bro.svg'),
      icon: null,
      title: 'Front-End',
      subjects: [
        {
          about: 'La interfaz de usuario',
          paragraphs: [
            `
            Sobre la base de la semántica de HTML, el diseño con CSS y la lógica de JavaScript, utilizo Vue JS principalmente como framework principal.
            `,
            `
            Con Vue JS construí Mantra. Me he involucrado y enamorado desde entonces con su ecosistema. En combinación con Vue Router para el
            enrutamiento, Vuex para manejar el estado y Vuetify para el diseño, he construido interfaces óptimas y atractivas.
            `
          ]
        }
      ],
      quote: null,
      images: [
        {
          name: 'HTML',
          path: require('@/assets/graphics/logo-html.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'CSS',
          path: require('@/assets/graphics/logo-css.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'JavaScript',
          path: require('@/assets/graphics/logo-js.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Vue JS',
          path: require('@/assets/logo.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Vue-Router',
          path: require('@/assets/graphics/logo-vue-router.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Vuex',
          path: require('@/assets/graphics/logo-vuex.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Vuetify',
          path: require('@/assets/logo.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        }
      ]
    },
    {
      graphic: require('@/assets/graphics/programming-bro.svg'),
      icon: null,
      title: 'Back-End',
      subjects: [
        {
          about: null,
          paragraphs: [
            `
            Soy capaz de construir sistemas del lado del servidor con JavaScript gracias a Node JS y Express JS. En cuanto a bases de
            datos, he trabajado con MySQL y MongoDB, siendo este último con el que actualmente acumulo experiencia y mayor destreza.
            `
          ]
        }
      ],
      quote: null,
      images: [
        {
          name: 'Node JS',
          path: require('@/assets/graphics/logo-node.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Express JS',
          path: require('@/assets/graphics/logo-express.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Mongo DB',
          path: require('@/assets/graphics/logo-mongodb.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        }
      ]
    },
    {
      graphic: require('@/assets/graphics/version-control-bro.svg'),
      icon: null,
      title: 'Otras herramientas',
      subjects: [
        {
          about: null,
          paragraphs: [
            `
            Git y GitHub son las herramientas que uso para controlar las versiones y sincronizar los repositorios de proyectos.
            `,
            `
            Notion es una de las herramientas que más utilizo, me apoyo en esta para organizar documentos básicamente de cualquier tema.
            En cuanto a la gestión de proyectos, he manejado Trello y, más reciente y frecuentemente, Asana.
            `
          ]
        }
      ],
      quote: null,
      images: [
        {
          name: 'Git',
          path: require('@/assets/graphics/logo-git.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'GitHub',
          path: require('@/assets/graphics/logo-github.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Notion',
          path: require('@/assets/graphics/logo-notion.svg'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        },
        {
          name: 'Asana',
          path: require('@/assets/graphics/logo-asana.png'),
          link: null,
          scale: 1,
          sm: 2,
          md: 1
        }
      ]
    },
  ]
}
