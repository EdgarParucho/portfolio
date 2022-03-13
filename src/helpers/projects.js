export default [
  {
    title: 'Mantra',
    subtitle: 'Para una gestión eficiente',
    description: `
      Mantra es una aplicación web personalizada para la gestión del equipo de operaciones de Microfilms Center.
      A través de la app, los usuarios manejan la información del servicio (soporte técnico) que provee la empresa.
    `,
    objective: `
      Mejorar el sistema de gestión de la empresa a través de la automatización de procesos,
      integración de tareas manejadas en otras herramientas y administración eficiente de la información.
    `,
    solutions: {
      overview: `
        Mantra agrega valor a la información que administra gracias a una lógica del negocio
        bien abstraida y su interfaz grafica orientada a enfocarse en lo necesario.
        Esto resulta en mejores tiempos y opciones para la toma de decisiones de los usuarios.
      `,
      classification: [
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
            { id: 7, name: 'Control de la información de contratos de clientes en un sistema accesible para el equipo.' }
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
        }
      ]
    },
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
      }
    ]
  }
]
