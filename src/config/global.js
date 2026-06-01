export default {
  global: {
    Name:
      'Propiedades biológicas, manejo y conservación del suelo en la agricultura',
    Description:
      'Este componente aborda de manera integral las propiedades biológicas del suelo, destacando la importancia de los microorganismos, macroorganismos y la materia orgánica en los procesos de descomposición, reciclaje de nutrientes y mantenimiento de la fertilidad. Asimismo, incluye el estudio de prácticas adecuadas de manejo y conservación del suelo, orientadas a prevenir su degradación. Se promueve el uso sostenible del recurso suelo, con el fin de mejorar la productividad agrícola, fortalecer los ecosistemas y garantizar el equilibrio ambiental a largo plazo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Propiedades biológicas del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Organismos del suelo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Materia orgánica del suelo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos biológicos en el suelo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Enmiendas o abonos orgánicos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo y conservación de suelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Degradación de suelos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conservación de suelos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Manejo sostenible del suelo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Integración suelo y producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Impacto del manejo del suelo en los cultivos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estrategias para mejorar la salud del suelo',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Abono orgánico',
      significado:
        'material de origen vegetal o animal que se incorpora al suelo para mejorar su fertilidad y actividad biológica.',
    },
    {
      termino: 'Actividad biológica',
      significado:
        'conjunto de procesos realizados por los organismos del suelo que influyen en su fertilidad y funcionamiento.',
    },
    {
      termino: 'Biodiversidad del suelo',
      significado:
        'variedad de organismos vivos presentes en el suelo, como bacterias, hongos, insectos y lombrices.',
    },
    {
      termino: 'Biología del suelo',
      significado:
        'rama de estudio que analiza los organismos del suelo y sus interacciones con el ambiente.',
    },
    {
      termino: 'Ciclo de nutrientes',
      significado:
        'proceso mediante el cual los nutrientes se transforman y circulan dentro del suelo y los ecosistemas.',
    },
    {
      termino: 'Conservación del suelo',
      significado:
        'conjunto de prácticas orientadas a prevenir la degradación y mantener la calidad del suelo.',
    },
    {
      termino: 'Degradación del suelo',
      significado:
        'deterioro de las propiedades físicas, químicas y biológicas del suelo por causas naturales o antrópicas.',
    },
    {
      termino: 'Enmiendas orgánicas',
      significado:
        'sustancias naturales que se agregan al suelo para mejorar sus características estructurales y biológicas.',
    },
    {
      termino: 'Erosión',
      significado:
        'proceso de pérdida de la capa superficial del suelo por acción del agua, el viento o actividades humanas.',
    },
    {
      termino: 'Fertilidad del suelo',
      significado:
        'capacidad del suelo para proporcionar nutrientes esenciales a las plantas en cantidades adecuadas.',
    },
    {
      termino: 'Materia orgánica',
      significado:
        'conjunto de residuos vegetales y animales en descomposición que enriquecen el suelo.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'seres vivos microscópicos del suelo, como bacterias y hongos, que participan en procesos biológicos.',
    },
    {
      termino: 'Manejo sostenible del suelo',
      significado:
        'uso responsable del suelo mediante prácticas que mantienen su productividad y conservan sus recursos.',
    },
    {
      termino: 'Salud del suelo',
      significado:
        'estado del suelo en el que mantiene su capacidad de funcionar como un sistema vivo y productivo.',
    },
    {
      termino: 'Simbiosis',
      significado:
        'relación biológica entre dos organismos que viven en estrecha asociación, beneficiándose mutuamente.',
    },
  ],
  referencias: [
    {
      referencia: 'Cropaia (s.f.). Los organismos del suelo.',
      link: '',
    },
    {
      referencia: 'Encolombia (s.f.). Agricultura integrada.',
      link: '',
    },
    {
      referencia:
        'InfoAgrónomo. (2023, diciembre 9). Propiedades del suelo: físicas, químicas y biológicas.',
      link: '',
    },
    {
      referencia:
        'Laboratorio Gedysa (s.f.). Propiedades biológicas en el suelo.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Biodiversidad del suelo. Portal de Suelos de la FAO.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Conservación del suelo. Portal de Suelos de la FAO.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s.f.). Propiedades biológicas del suelo. Portal de Suelos de la FAO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
