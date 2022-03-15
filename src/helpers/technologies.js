export default [
  {
    img: require('@/assets/graphics/prototyping-process-bro.svg'),
    title: 'Front-end',
    paragraphs: [
      `El front-end representa la interfaz que maneja la interacción del cliente o usuario. La base de un proyecto a nivel de frontend puede
      resumirse a estructura, estilo y funcionalidad, por lo que es fundamental manejar de forma correcta la semántica con HTML, el
      diseño con CSS y la lógica a través de JavaScript.`,
      `El frontend es comúnmente manejado con frameworks y librerías ya que estos proponen estructuras y herramientas
      orientadas a potenciar la eficiencia y escalabilidad. Vue JS es el framework de JavaScript que domino, con este construí
      Mantra. Me he involucrado y enamorado desde entonces con su ecosistema. En combinación con Vue Router para el
      enrutamiento, Vuex para manejar el estado y Vuetify para el diseño, he construido interfaces óptimas y atractivas.`
    ],
    technologies: {
      primary: [
        { name: 'HTML', logo: require('@/assets/graphics/logo-html.svg') },
        { name: 'CSS', logo: require('@/assets/graphics/logo-css.svg') },
        { name: 'JavaScript', logo: require('@/assets/graphics/logo-js.svg') }
      ],
      secondary: [
        { name: 'Vue JS', logo: require('@/assets/logo.png') },
        { name: 'Vue Router', logo: require('@/assets/graphics/logo-vue-router.png') },
        { name: 'Vuex', logo: require('@/assets/graphics/logo-vuex.png') },
        { name: 'Vuetify', logo: require('@/assets/logo.svg') }
      ]
    }
  },
  {
    img: require('@/assets/graphics/programming-bro.svg'),
    title: 'Back-end',
    paragraphs: [
      `El back-end abarca la parte lógica que maneja las peticiones del cliente (frontend) devolviendo los datos o recursos requeridos.
      Tengo la capacidad de construir sistemas del lado del servidor con JavaScript gracias a Node JS y Express JS. En lo que a bases de
      datos se refiere, he trabajado con MySQL y MongoDB, siendo este último con el que actualmente acumulo experiencia y destreza.`
    ],
    technologies: {
      primary: [
        { name: 'Node JS', logo: require('@/assets/graphics/logo-node.svg') },
        { name: 'Express JS', logo: require('@/assets/graphics/logo-express.png') },
        { name: 'Mongo DB', logo: require('@/assets/graphics/logo-mongodb.svg') }
      ]
    }
  },
  {
    img: require('@/assets/graphics/version-control-bro.svg'),
    title: 'Otras herramientas',
    paragraphs: [
      `Los sistemas de control de versiones son herramientas que permiten a equipos de desarrollo establecer
      un flujo para garantizar que cada miembro trabaje de forma independiente, segura y simultánea sobre un mismo proyecto.
      Git y GitHub son las herramientas de mayor uso para controlar y sincronizar respectivamente
      los repositorios de proyectos.`,
      `Notion es una de las herramientas que más utilizo en mi entorno, me apoyo en esta
      aplicación para organizar documentos sobre lo que estudio, mis proyectos, lecturas y temas similares. En cuanto a la gestión
      de proyectos, he manejado Trello y, más reciente y frecuentemente, Asana.`
    ],
    technologies: {
      primary: [
        { name: 'Git', logo: require('@/assets/graphics/logo-git.svg') },
        { name: 'GitHub', logo: require('@/assets/graphics/logo-github.svg') },
        { name: 'Notion', logo: require('@/assets/graphics/logo-notion.svg') },
        { name: 'Asana', logo: require('@/assets/graphics/logo-asana.svg') }
      ]
    }
  },
]