export default {
  path: '/about',
  title: { main: 'Acerca de mi', keyword: null },
  subtitle: 'Lo básico a nivel personal',
  cover: null,
  chapters: [
    {
      graphic: require('@/assets/graphics/parents-bro.svg'),
      icon: 'mdi-ring',
      title: 'Lo primero en mi escala',
      subjects: [
        {
          about: 'Esposo de Liz y padre de Leah',
          paragraphs: [
            `
              Me convertí en esposo y padre en el 2016. Desde entonces, cada decisión importante parte y orbita alrededor de este aspecto.
            `,
            `
              Liz tiene 28, es Ingeniero de Sistemas. Entre tanto, he aprendido que las diferencias y semejanzas pueden ser positivamente
              poderosas si harmonizan y que trabajar en equipo es necesario, no opcional.
            `,
            `
              Leah tiene 5, está en tercer nivel. Ella es solo pureza, la muestra de que todo se puede aprender. Considero que no hay un
              obstáculo justificable en nuestro camino cuándo hacemos algo por nuestros hijos.
            `
          ]
        }
      ],
      quote: null,
      images: null
    },
    {
      graphic: require('@/assets/graphics/website-creator-bro.svg'),
      icon: 'mdi-laptop',
      title: 'Soy desarrolador web',
      subjects: [
        {
          about: 'Puedo crear y mejorar sitios o aplicaciones que funcionan en el navegador.',
          paragraphs: [
            `
              Crear interfaces amigables y sistemas lógicos eficientes se convirtió en mi pasión.
            `,
            `
              Convertirme en desarrollador siempre fue un objetivo. Aunque fueron varios años y circunstancias extraordinarias las que me
              llevaron a ejercer, ahora he aprendido a construir mi futuro con acciones y decisiones enfocadas en mis objetivos.
            `
          ]
        }
      ],
      quote: null,
      images: null
    },
    {
      graphic: require('@/assets/graphics/critical-thinking-bro.svg'),
      icon: 'mdi-lightbulb-on',
      title: 'Habilidades blandas',
      subjects: [
        {
          about: 'Cualidades no técnicas',
          paragraphs: [
            `
              Organización. Para fluir en mi espacio y facilitar autoevaluaciones.
            `,
            `
              Innovación. Siempre alerta a nuevas y mejores formas de hacer las cosas.
            `,
            `
              Productividad. Oriento mi enfoque en tareas con dirección al objetivo.
            `,
            `
              Autodisciplina. Fundamental para lograr mis objetivos y la mejora continua.
            `,
            `
              Trabajo en equipo. Necesario y poderoso en términos de resultados y crecimiento.
            `,
          ]
        }
      ],
      quote: null,
      images: null
    }
  ]
}
