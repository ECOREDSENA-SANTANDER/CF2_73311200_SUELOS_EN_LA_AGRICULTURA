<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Propiedades biológicas del suelo
        
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las propiedades biológicas del suelo hacen referencia al conjunto de organismos vivos que habitan en él, así como a las interacciones y procesos que desarrollan. Estos influyen directamente en la fertilidad, la estructura y la productividad del suelo. 
            br
            br
            | A diferencia de las propiedades físicas y químicas, las biológicas representan la parte viva y dinámica del suelo, responsable de procesos esenciales como la descomposición de la materia orgánica, el reciclaje de nutrientes y la regulación de las poblaciones de organismos. 

      p El suelo, entendido como un sistema natural complejo, alberga una gran diversidad de formas de vida que cumplen funciones específicas dentro del ecosistema. Esta biodiversidad es fundamental para mantener el equilibrio ecológico y garantizar la sostenibilidad de los sistemas agrícolas. El estudio de las propiedades biológicas permite comprender cómo los organismos contribuyen a mejorar la calidad del suelo y cómo las prácticas agrícolas pueden favorecer o afectar su funcionamiento.
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-4.mb-3.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-8
          p En los sistemas agrícolas actuales, el conocimiento de la biología del suelo se ha convertido en una herramienta clave para promover prácticas sostenibles, reducir el uso de insumos químicos y fortalecer la resistencia de los cultivos frente a condiciones adversas. Por esta razón, el análisis de estas propiedades tiene un valor técnico, ambiental y productivo, siendo esencial para una adecuada gestión del suelo.
          p.bg07.p-4 #[b Concepto de biología del suelo:] la biología del suelo es la disciplina que estudia los organismos vivos presentes en el suelo, incluyendo microorganismos, mesofauna y macrofauna, así como las relaciones que establecen entre sí y con los componentes físicos y químicos del suelo. Este campo analiza cómo dichos organismos participan en los procesos ecológicos que determinan la fertilidad y funcionalidad del suelo.
          p El suelo debe entenderse como un ecosistema vivo y dinámico, en el que interactúan factores bióticos (organismos vivos) y abióticos (agua, aire, minerales y temperatura), generando un equilibrio que permite el desarrollo de la vida vegetal. Esta interacción constante da lugar a procesos fundamentales como la transformación de la materia orgánica, la disponibilidad de nutrientes y la formación de estructuras estables en el suelo. Desde un enfoque sistémico, la biología del suelo permite comprender:
      
      .fondo01.p-5.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .tarjeta.tarjeta--gris.p-4
              PasosB.color-secundario
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/01.png', alt='')
                  .col-lg-5.mb-4.mb-md-0
                    h3 El suelo como un sistema vivo y autorregulado
                    p Los organismos mantienen un equilibrio natural mediante relaciones como la competencia, la depredación y la simbiosis, lo que favorece la estabilidad del ecosistema.
                
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/02.png', alt='')
                  .col-lg-5.mb-4.mb-md-0
                    h3 Las relaciones simbióticas entre plantas y microorganismos
                    p Por ejemplo, las micorrizas (asociaciones entre hongos y raíces) mejoran la absorción de nutrientes, y las bacterias fijadoras de nitrógeno aportan este elemento esencial a las plantas.
                
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/03.png', alt='')
                  .col-lg-5.mb-4.mb-md-0
                    h3 La influencia de las prácticas agrícolas sobre la biodiversidad del suelo
                    p El uso excesivo de agroquímicos, la labranza intensiva o la quema de residuos pueden reducir la biodiversidad, mientras que prácticas como la incorporación de materia orgánica y la rotación de cultivos la favorecen.
                
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico2.svg")
            h3.bg02.py-2.w-card-text.text-white Importancia de las propiedades biológicas en la producción agrícola
      p Las propiedades biológicas del suelo determinan en gran medida su calidad, entendida como la capacidad para sostener la producción vegetal, mantener la calidad ambiental y favorecer la salud de los organismos.
               

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text a) Aspectos claves

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-3.col-8.mb-3.col-md-6
          img(src="@/assets/curso/Tema1/img03.png")
        .col-lg-9
          SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
            .tarjeta--boton.color-primario.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-5
                  figure
                    img(src='@/assets/curso/Tema1/01.svg', alt='Texto que describa la imagen')
              h4.text-center.text-white.bg02.p-2 Ciclo de nutrientes
              p.mb-0.text-center Los microorganismos transforman los nutrientes en formas disponibles para las plantas.
            .tarjeta--boton.color-primario.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-5
                  figure
                    img(src='@/assets/curso/Tema1/02.svg', alt='Texto que describa la imagen')
              h4.text-center.text-white.bg02.p-2 Estructura del suelo
              p.mb-0.text-center Los organismos contribuyen a la formación de agregados, mejorando la porosidad y la aireación.
            
            .tarjeta--boton.color-primario.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-5
                  figure
                    img(src='@/assets/curso/Tema1/03.svg', alt='Texto que describa la imagen')
              h4.text-center.text-white.bg02.p-2 Salud del cultivo
              p.mb-0.text-center Algunos microorganismos ayudan a proteger las plantas frente a patógenos.
            
            .tarjeta--boton.color-primario.p-4
              .row.justify-content-center.mb-3
                .col-7.col-md-5
                  figure
                    img(src='@/assets/curso/Tema1/04.svg', alt='Texto que describa la imagen')
              h4.text-center.text-white.bg02.p-2 Resiliencia
              p.mb-0.text-center Los suelos con alta actividad biológica resisten mejor condiciones adversas como sequías y estrés ambiental.
      

      p #[b Ejemplo:] un suelo con alta presencia de micorrizas puede mejorar la absorción de fósforo hasta en un 80 %, lo que reduce la necesidad de utilizar fertilizantes químicos. Las propiedades biológicas determinan en gran medida la calidad del suelo, entendida como su capacidad para sostener la producción vegetal, mantener la calidad ambiental y promover la salud de los organismos.
      
      img(src='@/assets/curso/Tema1/podcast.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-left")
      .row.justify-content-center.g-0(data-aos="fade-right").mb-4
        .col-lg-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100.bg06
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones(
              texto="Pódcast: para complementar toda esta información se invita al aprendiz a visitar el siguiente pódcast que será de gran utilidad:"
              :audio="require('@/assets/curso/Tema1/podcast.svg')"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")        
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1.	Organismos del suelo

      p El suelo alberga una gran biodiversidad organizada en niveles tróficos. Esto significa que los organismos se distribuyen en distintos niveles según su función en la cadena alimentaria y su papel en los procesos ecológicos. Esta diversidad convierte al suelo en uno de los ecosistemas más complejos y dinámicos, en el que millones de organismos interactúan de manera constante para mantener su equilibrio y funcionamiento. En relación con estos niveles tróficos, a continuación se presenta la clasificación:

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="a)	Microorganismos")
              .col-md-11.mb-4.mb-md-0
                p Son los organismos más abundantes y diversos del suelo, aunque no visibles a simple vista. 
              .col-md-6.mb-2.mb-md-0
                .row
                  .col-lg-5.mb-3
                    img(src='@/assets/curso/Tema1/1.png', alt='Texto que describa la imagen')
                  .col-lg-6  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Bacterias:] participan en la descomposición de materia orgánica, fijación de nitrógeno y transformación de nutrientes.  
              .col-md-6.mb-2.mb-md-0
                .row
                  .col-lg-5.mb-3
                    img(src='@/assets/curso/Tema1/2.png', alt='Texto que describa la imagen')
                  .col-lg-6  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Hongos:] descomponen compuestos complejos como la lignina y forman asociaciones simbióticas con las raíces (micorrizas).
              .col-md-6.mb-2.mb-md-0
                .row
                  .col-lg-5.mb-3
                    img(src='@/assets/curso/Tema1/3.png', alt='Texto que describa la imagen')
                  .col-lg-6  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Actinomicetos:] intervienen en la descomposición de residuos orgánicos resistentes.
              .col-md-6.mb-2.mb-md-0
                .row
                  .col-lg-5.mb-3
                    img(src='@/assets/curso/Tema1/4.png', alt='Texto que describa la imagen')
                  .col-lg-6  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Protozoos y nematodos:] regulan poblaciones microbianas y participan en la liberación de nutrientes.

            .row.justify-content-center(titulo="b)	<i>Mesofauna</i>")
              .col-md-11.mb-4.mb-md-0
                p La macrofauna del suelo está compuesta por organismos de mayor tamaño, generalmente superiores a 2 milímetros, visibles a simple vista y con una alta capacidad de modificar físicamente la estructura del suelo. Estos organismos cumplen funciones clave en la formación, aireación, mezcla y fertilidad del suelo, por lo que son considerados fundamentales en los sistemas agrícolas sostenibles. Entre los principales representantes de la macrofauna se encuentran.
              .col-md-10.mb-0.mb-md-0.mb-0
                .row.mb-2
                  .col-lg-4.mb-3
                    img(src='@/assets/curso/Tema1/5.png', alt='Texto que describa la imagen')
                  .col-lg-7  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Ácaros:] son uno de los grupos más abundantes en el suelo. Se alimentan de restos orgánicos, hongos, bacterias e incluso de otros pequeños organismos. Su actividad contribuye a la fragmentación de la materia orgánica y a la regulación de poblaciones microbianas. 
              .col-md-10.mb-4.mb-md-0
                .row
                  .col-lg-4.mb-3
                    img(src='@/assets/curso/Tema1/6.png', alt='Texto que describa la imagen')
                  .col-lg-7
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Colémbolos:] también conocidos como “pulgas de la humedad”, se encuentran comúnmente en suelos ricos en materia orgánica. Se alimentan principalmente de hongos, bacterias y residuos vegetales en descomposición. Son indicadores de suelos saludables debido a su sensibilidad a cambios ambientales.
             
            .row.justify-content-center(titulo="c)	Macrofauna")
              .col-md-11.mb-2.mb-md-0
                p La macrofauna del suelo está compuesta por organismos de mayor tamaño, generalmente superiores a 2 milímetros, visibles a simple vista y con una alta capacidad de modificar físicamente la estructura del suelo. Estos organismos cumplen funciones clave en la formación, aireación, mezcla y fertilidad del suelo, por lo que son considerados fundamentales en los sistemas agrícolas sostenibles. Entre los principales representantes de la macrofauna se encuentran.
              .col-md-10.mb-0.mb-md-0.mb-0
                .row.mb-0
                  .col-lg-4.mb-3
                    img(src='@/assets/curso/Tema1/7.png', alt='Texto que describa la imagen')
                  .col-lg-7  
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Lombrices:] son los organismos más representativos de la macrofauna. Se alimentan de materia orgánica en descomposición y suelo, produciendo excretas (humus) altamente ricas en nutrientes.
              .col-md-11.mb-4.mb-md-0
                p Su actividad genera galerías que mejoran la aireación del suelo, facilitan la infiltración y retención de agua y favorecen el crecimiento radicular. Por estas razones, estos organismos son conocidos como “ingenieros del suelo”, ya que transforman su estructura y aumentan su fertilidad.

              .col-md-10.mb-0.mb-md-0
                .row.mb-0
                  .col-lg-4.mb-3
                    img(src='@/assets/curso/Tema1/8.png', alt='Texto que describa la imagen')
                  .col-lg-7
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Termitas:] son insectos sociales que participan en la descomposición de materiales vegetales, especialmente residuos ricos en celulosa como madera y hojas secas.
              .col-md-11.mb-4.mb-md-0
                p Sus principales aportes incluyen el reciclaje de materia orgánica, la formación de agregados del suelo y la mejora de la estructura y porosidad. Aunque en algunos casos pueden ser consideradas plagas, en los ecosistemas naturales cumplen un papel ecológico fundamental.
              
              .col-md-10.mb-4.mb-md-0
                .row
                  .col-lg-4.mb-3
                    img(src='@/assets/curso/Tema1/9.png', alt='Texto que describa la imagen')
                  .col-lg-7
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-hoja
                        p #[b Escarabajos (coleópteros del suelo):] incluyen diversas especies con hábitos alimenticios variados (detritívoros, depredadores, coprófagos).


      p Sus funciones principales incluyen enterrar materia orgánica como estiércol y restos vegetales, controlar las poblaciones de otros organismos y favorecer la incorporación de nutrientes al suelo, contribuyendo así al equilibrio y la fertilidad del ecosistema edáfico.
      p Los organismos del suelo, desde los microorganismos hasta la macrofauna, cumplen diversas funciones ecológicas fundamentales que permiten el adecuado funcionamiento del ecosistema edáfico. Estas funciones se encuentran estrechamente relacionadas con la fertilidad, la estructura y la sostenibilidad del suelo en los sistemas productivos agrícolas. A continuación, se presentan las principales funciones que desempeñan en este ecosistema.



      .fondo2.p-5.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .tarjeta.fondosly.p-4
              PasosB.color-secundario
                .row.justify-content-center.align-items-center(titulo=" Fragmentación de residuos")
                  .col-lg-6.mb-4.mb-md-0
                    h4 a) Fragmentación de residuos
                    p La fragmentación de residuos consiste en la descomposición física inicial de restos orgánicos como hojas, raíces, estiércol y otros materiales vegetales y animales. Este proceso es realizado principalmente por organismos de la mesofauna, como ácaros y colémbolos, y de la macrofauna, como lombrices y escarabajos. Esta función reduce el tamaño de los residuos orgánicos, aumenta la superficie de contacto para la acción de microorganismos como bacterias y hongos, acelera los procesos de descomposición y mineralización, y facilita la liberación de nutrientes esenciales como nitrógeno, fósforo y potasio. En consecuencia, resulta clave para el reciclaje de nutrientes y la formación de materia orgánica estable o humus.
                  .col-lg-4.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/new1.png', alt='')
               
                .row.justify-content-center.align-items-center(titulo="b) Mezcla del suelo")
                  .col-lg-6.mb-4.mb-md-0
                    h4 b) Mezcla del suelo
                    p La mezcla del suelo es el proceso mediante el cual los organismos integran los diferentes componentes del suelo, es decir, materia orgánica, minerales, aire y agua, favoreciendo la homogeneidad del perfil edáfico. Este proceso es realizado principalmente por la macrofauna, especialmente las lombrices. Su acción permite incorporar materia orgánica desde la superficie hacia capas más profundas, favorece la formación de agregados estables del suelo y mejora la distribución de nutrientes en el perfil. De esta manera, contribuye a mantener un suelo estructuralmente equilibrado y con mejores condiciones para el desarrollo de las raíces.
                  .col-lg-4.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/new2.png', alt='')
                
                .row.justify-content-center.align-items-center(titulo="c) Formación de canales  (aireación e infiltración)")
                  .col-lg-6.mb-4.mb-md-0
                    h4 c) Formación de canales  (aireación e infiltración)
                    p Diversos organismos del suelo, al desplazarse o excavar, crean galerías y poros que conforman una red de canales que mejoran significativamente las propiedades físicas del suelo. Este proceso incrementa la aireación, permitiendo el intercambio de gases como oxígeno y dióxido de carbono, mejora la infiltración del agua al reducir la escorrentía superficial y la erosión, favorece el almacenamiento de agua disponible para las plantas y facilita el crecimiento radicular al disminuir la resistencia del suelo. Las lombrices, las termitas y algunos insectos son los principales responsables de esta función.
                  .col-lg-4.mb-3.col-md-8
                    figure
                      img(src='@/assets/curso/Tema1/new3.png', alt='')
      p.bg08.p-3.text-center #[b NOTA:] las lombrices, termitas y algunos insectos son los principales responsables de esta función.

            
      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2.	 Materia orgánica del suelo 

      p La materia orgánica del suelo es uno de los componentes más importantes para la fertilidad y sostenibilidad de los sistemas agrícolas. Se le considera el motor biológico del suelo, ya que regula múltiples procesos físicos, químicos y biológicos que determinan su productividad. Está constituida por una mezcla dinámica de materiales en diferentes estados de descomposición, provenientes de residuos vegetales, animales y de la actividad de los organismos del suelo.

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-5.col-md-8
          img(src='@/assets/curso/Tema1/img04.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2.col-4.mb-3.col-md-3
              img(src='@/assets/curso/Tema1/ico.svg', alt='')
            .col-lg-10
              p Desde un enfoque integral, la materia orgánica no es un componente estático, sino un sistema en constante transformación, donde interactúan organismos vivos, compuestos en descomposición y sustancias estables. La materia orgánica está compuesta principalmente por:
          .row.justify-content-center.align-items-center.bg007.p-3
            .col-lg-12
              h3 a. Residuos frescos (hojas, raíces, restos vegetales y animales)
              p Corresponden a la fracción más reciente y poco transformada de la materia orgánica. Incluyen hojas caídas, raíces muertas, restos de cosecha, estiércol, tallos y otros materiales orgánicos recién incorporados al suelo.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 1.
        span Residuos frescos del suelo: características e importancia agrícola
      .tabla-a.color-acento-botones.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg07 Características principales
              th.bg07 Funciones
              th.bg07 Importancia agrícola
          tbody
            tr
              td
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Alto contenido de carbono orgánico. 
                  li.d-flex
                    i.fas •
                    | Estructura aún reconocible (no descompuesta).
                  li.d-flex
                    i.fas •
                    | Relación carbono / nitrógeno (C / N) variable, lo que influye en su descomposición.
              td 
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Sirven como fuente primaria de energía para microorganismos del suelo.
                  li.d-flex
                    i.fas •
                    | Inician los procesos de descomposición biológica. 
                  li.d-flex
                    i.fas •
                    p.mb-0 Protegen la superficie del suelo cuando actúan como cobertura #[em (mulch)]. 
                  li.d-flex
                    i.fas •
                    | Contribuyen a la formación futura de humus. 
              td 
                tr La incorporación de residuos frescos mejora la fertilidad a mediano plazo y favorece la actividad biológica, especialmente cuando se manejan adecuadamente (trituración, compostaje, incorporación al suelo).


      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-8
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center.bg007.p-3
            .col-lg-12
              h3 b. Biomasa microbiana
              p Es la fracción viva de la materia orgánica, compuesta por microorganismos como bacterias, hongos, actinomicetos, algas y protozoos.


      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 2.
        span Biomasa microbiana del suelo: características, funciones e importancia agrícola.

      .tabla-a.color-acento-botones.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg07 Características principales
              th.bg07 Funciones
              th.bg07 Importancia agrícola

          tbody
            tr
              td
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Representa un pequeño porcentaje del total de la materia orgánica, pero con alta actividad.
                  li.d-flex
                    i.fas •
                    | Tiene un ciclo de vida corto y dinámica rápida.
                  li.d-flex
                    i.fas •
                    | Responde rápidamente a cambios en el manejo del suelo.

              td
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Descomponen residuos orgánicos en compuestos más simples.
                  li.d-flex
                    i.fas •
                    | Participan en la mineralización, liberando nutrientes disponibles para las plantas.
                  li.d-flex
                    i.fas •
                    | Intervienen en procesos clave como:
                  li.d-flex.ms-4
                    i.fas -
                    | Fijación biológica de nitrógeno.
                  li.d-flex.ms-4
                    i.fas -
                    | Solubilización de fósforo.
                  li.d-flex.ms-4
                    i.fas -
                    | Formación de compuestos orgánicos estables.
                  li.d-flex
                    i.fas •
                    | Establecen relaciones simbióticas con plantas (ejemplo: micorrizas).

              td
                p.mb-0 Una alta biomasa microbiana indica un suelo activo, fértil y saludable. Su desarrollo se favorece con prácticas como el uso de abonos orgánicos, la rotación de cultivos y la reducción de agroquímicos.

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-8
          img(src='@/assets/curso/Tema1/img06.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center.bg007.p-3
            .col-lg-12
              h3 c. Humus (materia orgánica estable): 
              p Es la fracción más descompuesta, compleja y estable de la materia orgánica, resultado de procesos prolongados de transformación biológica y química.

      .titulo-sexto.color-acento-botones(data-aos='fade-right')
        h5 Tabla 3.
        span Humus del suelo: características, funciones e importancia agrícola

      .tabla-a.color-acento-botones.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg07 Características principales
              th.bg07 Funciones
              th.bg07 Importancia agrícola

          tbody
            tr
              td
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Color oscuro (negro o marrón).
                  li.d-flex
                    i.fas •
                    | Alta estabilidad y resistencia a la degradación.
                  li.d-flex
                    i.fas •
                    | No presenta estructura reconocible de los residuos originales.

              td
                ul.lista-ul
                  li.d-flex
                    i.fas •
                    | Mejora la estructura del suelo, favoreciendo la formación de agregados.
                  li.d-flex
                    i.fas •
                    | Aumenta la capacidad de retención de agua, especialmente en suelos arenosos.
                  li.d-flex
                    i.fas •
                    | Incrementa la capacidad de intercambio catiónico, reteniendo nutrientes esenciales como calcio, magnesio y potasio.
                  li.d-flex
                    i.fas •
                    | Actúa como reserva de nutrientes de liberación lenta.
                  li.d-flex
                    i.fas •
                    | Contribuye a la estabilidad del pH del suelo.

              td
                p.mb-0 El humus es fundamental para la fertilidad a largo plazo, ya que mantiene condiciones óptimas para el desarrollo de cultivos y reduce la necesidad de insumos externos.

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3.	 Procesos biológicos en el suelo

      .fondo001.p-4.mb-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-11
            p Los procesos biológicos en el suelo son el conjunto de transformaciones que realizan los organismos vivos (principalmente microorganismos) sobre la materia orgánica y los nutrientes. Estos procesos son esenciales para mantener la fertilidad del suelo, ya que permiten la disponibilidad de elementos nutritivos para las plantas, el reciclaje de materia orgánica y la estabilidad del ecosistema edáfico.
            p Se caracterizan por ser dinámicos, continuos y altamente dependientes de factores como la humedad, temperatura, aireación, pH y disponibilidad de materia orgánica.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azull")
            .row(titulo="a)	Descomposición")
              .col-md-12.mb-4.mb-md-0
                p Es el proceso mediante el cual los residuos orgánicos (hojas, raíces, estiércol, restos vegetales y animales) son degradados por la acción de microorganismos como bacterias y hongos.
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5.text-white Tabla 4.
                  span.text-white Descomposición de la materia orgánica del suelo
                .tabla-a.color-acento-botones.mb-4.bgblanco
                  table
                    thead
                      tr
                        th.bg07 Características principales
                        th.bg07 Importancia
                    tbody
                      tr
                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Es la etapa inicial del reciclaje de nutrientes.
                            li.d-flex
                              i.fas •
                              | Reduce la materia orgánica compleja a compuestos más simples.
                            li.d-flex
                              i.fas •
                              | Libera energía utilizada por los microorganismos.
                        td
                          | Permite la continuidad del ciclo de nutrientes y la formación de compuestos intermedios que serán utilizados en procesos posteriores como la mineralización y la humificación.
            .row(titulo="b) Mineralización")
              .col-md-12.mb-4.mb-md-0
                p Es la transformación de compuestos orgánicos en formas inorgánicas que pueden ser absorbidas por las plantas.

                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5.text-white Tabla 5.
                  span.text-white Mineralización de la materia orgánica del suelo

                .tabla-a.color-acento-botones.mb-4.bgblanco
                  table
                    thead
                      tr
                        th.bg07 Ejemplos
                        th.bg07 Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Nitrógeno orgánico en amonio (NH#[sub 4]#[sup +]).
                            li.d-flex
                              i.fas •
                              | Fósforo orgánico en fosfatos (PO#[sub 4]#[sup 3-]).
                            li.d-flex
                              i.fas •
                              | Azufre orgánico en sulfatos (SO#[sub 4]#[sup 2-]).

                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Hace disponibles los nutrientes esenciales para los cultivos.
                            li.d-flex
                              i.fas •
                              | Es fundamental para la fertilidad del suelo.
            
            .row(titulo="c) Inmovilización")
              .col-md-12.mb-4.mb-md-0
                p Es el proceso contrario a la mineralización. Los microorganismos toman nutrientes disponibles del suelo y los incorporan a su biomasa.

                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5.text-white Tabla 6.
                  span.text-white Inmovilización de nutrientes en el suelo

                .tabla-a.color-acento-botones.mb-4.bgblanco
                  table
                    thead
                      tr
                        th.bg07 Características
                        th.bg07 Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Ocurre cuando hay alta disponibilidad de carbono (ejemplo: residuos con alta relación C / N).
                            li.d-flex
                              i.fas •
                              | Los nutrientes quedan temporalmente no disponibles para las plantas.

                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Evita la pérdida de nutrientes por lixiviación.
                            li.d-flex
                              i.fas •
                              | Actúa como reserva temporal que luego será liberada al morir los microorganismos.

            .row(titulo="d) Fijación biológica de nitrógeno")
              .col-md-12.mb-4.mb-md-0
                p Es el proceso mediante el cual ciertas bacterias convierten el nitrógeno atmosférico (N#[sub 2]) en formas utilizables por las plantas, como el amonio (NH#[sub 4]#[sup +]).

                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5.text-white Tabla 7.
                  span.text-white Fijación biológica de nitrógeno en el suelo

                .tabla-a.color-acento-botones.mb-4.bgblanco
                  table
                    thead
                      tr
                        th.bg07 Organismos involucrados
                        th.bg07 Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Bacterias simbióticas como  #[em Rhizobium] (en leguminosas).
                            li.d-flex
                              i.fas •
                              | Bacterias libres como #[em Azotobacter] y #[em Clostridium].

                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Reduce la necesidad de fertilizantes nitrogenados.
                            li.d-flex
                              i.fas •
                              | Mejora la fertilidad natural del suelo.
                            li.d-flex
                              i.fas •
                              | Es clave en sistemas agroecológicos y sostenibles.

            .row(titulo="e) Nitrificación")
              .col-md-12.mb-4.mb-md-0
                p Es un proceso biológico en dos etapas realizado por bacterias nitrificantes (conversión de amonio a nitrato).

                .row.mb-3
                  .col-md-6
                    p #[span.bg06.px-2.py-1.fw-bold 1] Amonio (NH#[sub 4]#[sup +]) a Nitrito (NO#[sub 2]#[sup -]) #[br]#[br] #[em (Nitrosomonas)].
                  .col-md-6
                    p #[span.bg06.px-2.py-1.fw-bold 2] Nitrito (NO#[sub 2]#[sup -]) a Nitrato (NO#[sub 3]#[sup -]) #[br]#[br] #[em (Nitrobacter)].

                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5.text-white Tabla 8.
                    span.text-white Nitrificación en el suelo

                  .tabla-a.color-acento-botones.mb-2.bgblanco
                    table
                      thead
                        tr
                          th.bg07 Importancia
                          th.bg07 Condiciones favorables

                      tbody
                        tr
                          td
                            ul.lista-ul
                              li.d-flex
                                i.fas •
                                | El nitrato es una de las formas más fácilmente absorbidas por las plantas.
                              li.d-flex
                                i.fas •
                                | Influye en la disponibilidad de nitrógeno en el suelo.

                          td
                            ul.lista-ul
                              li.d-flex
                                i.fas •
                                | Buena aireación.
                              li.d-flex
                                i.fas •
                                | pH neutro.
                              li.d-flex
                                i.fas •
                                | Temperatura moderada.

            .row(titulo="f) Humificación")
              .col-md-12.mb-4.mb-md-0
                p Es el proceso mediante el cual los residuos orgánicos se transforman en humus, una sustancia estable y compleja.

                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5.text-white Tabla 9.
                  span.text-white Humificación de la materia orgánica del suelo

                .tabla-a.color-acento-botones.mb-4.bgblanco
                  table
                    thead
                      tr
                        th.bg07 Características
                        th.bg07 Importancia

                    tbody
                      tr
                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Proceso lento y progresivo.
                            li.d-flex
                              i.fas •
                              | Genera compuestos resistentes a la degradación.

                        td
                          ul.lista-ul
                            li.d-flex
                              i.fas •
                              | Mejora la estructura del suelo.
                            li.d-flex
                              i.fas •
                              | Incrementa la retención de agua y nutrientes.
                            li.d-flex
                              i.fas •
                              | Aumenta la fertilidad a largo plazo.
        .col-lg-4
          img.d-none.d-lg-block(src='@/assets/curso/Tema1/img07.png', alt='')

      p #[b NOTA:] estos procesos no ocurren de forma aislada, sino que están interconectados en el ciclo de la materia orgánica.

      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-12
          .titulo-sexto.color-acento-botones(data-aos='fade-right')
            h5 Figura 1.
            span Procesos de transformación de la materia orgánica en el suelo 
          p Este ciclo permite mantener el equilibrio entre la disponibilidad inmediata de nutrientes y su almacenamiento en el suelo.
          img(src='@/assets/curso/Tema1/fig1.svg', alt='Diagrama de los procesos de transformación de la materia orgánica en el suelo: descomposición, mineralización, inmovilización, nitrificación y humificación.')


      separador
      #t_1_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.4.	 Enmiendas o abonos orgánicos

      .row.justify-content-center.align-items-center.mb-4.bg07(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img.izq(src='@/assets/curso/Tema1/img08.png', alt='')
        .col-lg-7.p-4
          .row
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/Tema1/ico2.svg', alt='')
            .col-lg-12
              p Las enmiendas o abonos orgánicos son materiales de origen vegetal, animal o mixto que se incorporan al suelo con el propósito de mejorar sus propiedades físicas, químicas y biológicas. Más allá de aportar nutrientes, su principal valor radica en que reactivan y fortalecen la vida del suelo, estimulando la actividad de microorganismos y favoreciendo procesos naturales esenciales para la fertilidad.
              p A diferencia de los fertilizantes químicos, las enmiendas orgánicas actúan de manera integral y progresiva, contribuyendo a la sostenibilidad de los sistemas productivos a continuación se nombran algunos tipos de enmiendas o abonos orgánicos.

      .fondo03.p-5.mb-4(data-aos="zoom-in-left")
        SlyderE(indicadores="derecha")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 a)	#[em Compost]
              p El #[em compost] es el resultado de un proceso biológico aeróbico en el que microorganismos descomponen residuos orgánicos como restos de cocina, poda, hojas secas y estiércol, bajo condiciones controladas de humedad, aireación y temperatura.
              p Es un material estable, oscuro y con olor a tierra, rico en humus y microorganismos beneficiosos, con bajo riesgo de patógenos cuando el proceso es adecuado. Mejora la estructura del suelo, aporta nutrientes de liberación lenta e incrementa la actividad biológica. Puede aplicarse directamente al suelo, en semilleros o como parte de sustratos en agricultura urbana.
            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/img10.png', alt='Texto que describa la imagen')
      
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 b) Estiércol
              p El estiércol proviene de excretas animales (bovinos, aves, porcinos, equinos, entre otros), generalmente mezcladas con restos vegetales o material de cama.
              p El estiércol se caracteriza por su alto contenido de nitrógeno y otros nutrientes; sin embargo, puede contener patógenos o semillas de malezas si no se maneja adecuadamente. Su aplicación aporta beneficios como la mejora de la fertilidad del suelo y el estímulo de la actividad microbiana. Por esta razón, se recomienda que sea previamente compostado o estabilizado antes de su uso y evitar la aplicación de estiércol fresco directamente en los cultivos, ya que puede causar fitotoxicidad o contaminación.
            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/img11.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 c) Humus de lombriz
              p El humus de lombriz o #[em lombricompost] es el producto de la digestión de materia orgánica por lombrices, principalmente de la especie #[em Eisenia foetida].
              p El compost se caracteriza por su alta concentración de microorganismos benéficos, la presencia de nutrientes en formas fácilmente disponibles y una textura fina y homogénea. Su uso contribuye a mejorar la estructura del suelo, la aireación y la retención de agua, además de estimular el crecimiento vegetal y el desarrollo radicular, aumentando la resistencia de las plantas a enfermedades. Por estas razones, es ideal para semilleros, huertas urbanas y cultivos en macetas.
            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/img12.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 d) Bocashi
              p El #[em bocashi] es un abono orgánico obtenido mediante un proceso de fermentación aeróbica acelerada, utilizando materiales como salvado de arroz, estiércol, tierra, ceniza, melaza y microorganismos.
              p El #[em bocashi] se caracteriza por ser un producto de elaboración rápida, con un tiempo de producción entre 7 y 15 días, alta actividad microbiológica y un olor agradable cuando ha sido correctamente elaborado. Su aplicación aporta nutrientes de rápida disponibilidad, reactiva la vida microbiana del suelo y mejora la fertilidad de manera inmediata. Se utiliza mediante aplicación directa al suelo o en mezcla con sustratos, contribuyendo al mejoramiento de las condiciones del cultivo.
            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/img13.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h5 e) Abonos verdes
              p Los abonos verdes son cultivos (principalmente leguminosas como frijol) que se siembran con el objetivo de ser incorporados al suelo antes de su floración.
              p Los abonos verdes se caracterizan por aportar biomasa fresca al suelo y mejorar su cobertura, lo que contribuye a su protección frente a la erosión. Su uso incrementa la materia orgánica, mejora la estructura del suelo y, en el caso de las leguminosas, permite la fijación de nitrógeno atmosférico. Se incorporan al suelo mediante labranza ligera o se dejan como cobertura vegetal, favoreciendo la conservación y la fertilidad del sistema productivo.
            .col-lg-4.col-md-8
              figure
                img(src='@/assets/curso/Tema1/img14.png', alt='Texto que describa la imagen')

       
      p.bg007.p-4.mb-4  La aplicación de enmiendas orgánicas debe realizarse bajo criterios técnicos que permitan optimizar sus beneficios y evitar efectos negativos en el suelo y los cultivos. No existe una única forma de uso, ya que su manejo depende de las condiciones específicas del sistema productivo. A continuación, se amplían los principales criterios a considerar:
      
      TabsB.color-acento-botones(data-aos="zoom-in-left")
        .py-4.py-md-5(titulo="a)	Tipo de cultivo" :icono="require('@/assets/curso/Tema1/tab1.svg')")
          .row.justify-content-center
            .col-lg-4.mb-3.col-9.col-md-7
              figure
                img(src='@/assets/curso/Tema1/tabs1.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              h4 a)	Tipo de cultivo
              p Cada cultivo tiene requerimientos nutricionales y condiciones de manejo diferentes, por lo que la selección y aplicación de abonos orgánicos debe ajustarse a sus necesidades.
              h4 Aspectos a considerar:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Demanda de nutrientes:] cultivos de alto requerimiento (hortalizas como tomate, lechuga, pimentón) necesitan enmiendas más ricas y frecuentes. 
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Ciclo del cultivo:] cultivos de ciclo corto requieren abonos de rápida disponibilidad (ejemplo: #[em bocashi]), mientras que cultivos de ciclo largo pueden beneficiarse de #[em compost] o humus. 
                li.d-flex
                  i.fas •
                  p #[b Sistema de producción:] en agricultura urbana (macetas, camas elevadas), se requieren sustratos livianos y bien descompuestos. 
              p #[b NOTA:] una adecuada selección mejora el crecimiento, rendimiento y sanidad del cultivo.
        .py-4.py-md-5(titulo="b) Estado del suelo" :icono="require('@/assets/curso/Tema1/tab2.svg')")
          .row.justify-content-center
            .col-lg-4.mb-3.col-9.col-md-7
              figure
                img(src='@/assets/curso/Tema1/tabs2.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              h4 b) Estado del suelo
              p El diagnóstico previo del suelo es fundamental para determinar el tipo, cantidad y frecuencia de aplicación de las enmiendas.
              h4 Aspectos a evaluar:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Contenido de materia orgánica:] suelos pobres requieren mayor incorporación de abonos orgánicos.
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Textura y estructura:] suelos arenosos necesitan mejorar retención de agua; suelos arcillosos requieren mejorar aireación.
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Fertilidad y disponibilidad de nutrientes:] permite definir qué tipo de enmienda aplicar.
                li.d-flex
                  i.fas •
                  p.mb-0 #[b pH del suelo:] algunas enmiendas ayudan a corregir acidez o alcalinidad.
              p #[b NOTA:] permite aplicar enmiendas de manera eficiente y específica, evitando excesos o deficiencias.

        .py-4.py-md-5(titulo="c) Disponibilidad de recursos" :icono="require('@/assets/curso/Tema1/tab3.svg')")
          .row.justify-content-center
            .col-lg-4.mb-3.col-9.col-md-7
              figure
                img(src='@/assets/curso/Tema1/tabs3.png', alt='Texto que describa la imagen')
            .col-lg-7.mb-4.mb-md-0
              h4 c) Disponibilidad de recursos
              p El uso de enmiendas orgánicas también depende de los recursos disponibles en el entorno, tanto materiales como económicos y técnicos.
              h4 Aspectos a considerar:
              ul.lista-ul
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Disponibilidad de materiales orgánicos:] residuos de cocina, estiércol, restos de poda, subproductos agrícolas.
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Acceso a insumos:] facilidad para obtener #[em compost], humus o biofertilizantes.
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Mano de obra y tiempo:] algunos abonos requieren procesos de elaboración (compostaje, #[em bocashi]).
                li.d-flex
                  i.fas •
                  p.mb-0 #[b Costos:] preferencia por recursos locales para reducir gastos.
              p #[b NOTA:] favorece la implementación de prácticas sostenibles basadas en el aprovechamiento de recursos locales y la economía circular.







  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.circl-arrow .slyder-f__btn i
  font-size: 1.2rem
  background-color: #375E02
  //background-color: $color-acento-contenido
  color: $white
  height: 46px
  width: 46px
  padding: 5px
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center

.cursor-pointer.crd_hover_txt
  cursor: pointer
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  &:hover
    .crd_hover_txt--body
      transition: all 0.5s cubic-bezier(0.92, 0, 0.58, 1)
      transform: translateY(0)

  .crd_hover_txt--body
    position: absolute
    padding: 1.5rem
    bottom: 0
    transition: all 0.5s cubic-bezier(0.2, 0, 0.58, 1)
    transform: translateY(100%)
    background-color: #EAEEE5

  @media (min-width:1200px) and (max-width:1400px)
    .crd_hover_txt--body
      p
        font-size: 0.85em
  @media (max-width: $bp-max-md)
    .crd_hover_txt--body
      max-height: 100%
      overflow-y: auto
</style>
