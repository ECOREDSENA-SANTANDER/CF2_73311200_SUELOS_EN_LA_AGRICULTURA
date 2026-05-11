<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Integración suelo y producción

    .bloque-texto-g.bg01.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 La integración suelo y producción hace referencia a la relación directa y dinámica entre las condiciones del suelo y el desarrollo de los cultivos, donde el suelo no se concibe solo como un soporte físico, sino como un sistema vivo que influye de manera determinante en la productividad agrícola.
          br
          br
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text Relación entre propiedades biológicas y productividad

    p Existe una relación directa entre la actividad biológica del suelo y el rendimiento agrícola.

    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center
              img.w-card-icon(src="@/assets/curso/Tema3/ico2.svg")
              h3.bg02.py-2.w-card-text.text-white a)	Factores clave
        .row.justify-content-center.mb-4
          .col-lg-12.bg03.p-4
            ul.lista-ul
              li.d-flex
                i.fas •
                | Disponibilidad de nutrientes. 
              li.d-flex
                i.fas •
                | Desarrollo radicular. 
              li.d-flex
                i.fas •
                | Interacciones simbióticas. 
            p #[b Ejemplo:] suelos con alta biodiversidad microbiana presentan mayor productividad y menor incidencia de enfermedades.
      .col-lg-7.col-md-9
        img(src="@/assets/curso/Tema3/img02.png")


      separador
      #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 3.1. Impacto del manejo del suelo en los cultivos

      p El manejo del suelo es un factor determinante para el éxito de los cultivos, ya que influye directamente en la disponibilidad de nutrientes, el desarrollo radicular, la retención de agua y la actividad biológica del ecosistema edáfico. Un manejo adecuado permite mantener la fertilidad del suelo y favorecer la productividad agrícola de manera sostenible.

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.bg04.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/Tema3/img03.svg', alt='Texto que describa la imagen')          
              h2.text-center a) Impactos positivos
              p un manejo adecuado del suelo genera efectos favorables en el desarrollo de los cultivos, tales como una mejor germinación de las semillas, un mayor crecimiento de las plantas y una mayor resistencia frente a condiciones de estrés biótico y abiótico. Además, contribuye a la mejora de la estructura del suelo, favorece la aireación, optimiza la infiltración del agua y promueve una mayor actividad de microorganismos benéficos, lo que se traduce en un sistema productivo más estable y eficiente.
            
            .col-md.tarjeta.bg05.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/Tema3/img04.svg', alt='Texto que describa la imagen')          
              h2.text-center.text-white b) Impactos negativos
              p.text-white por el contrario, un manejo inadecuado del suelo puede generar efectos perjudiciales como la compactación, la cual limita el desarrollo de las raíces y reduce la infiltración de agua; la erosión, que provoca la pérdida de nutrientes y materia orgánica; y el uso excesivo de productos químicos, que afecta negativamente la biodiversidad del suelo, reduciendo la actividad de microorganismos esenciales para los procesos de descomposición y reciclaje de nutrientes. Estos factores disminuyen la fertilidad del suelo y comprometen la sostenibilidad de los sistemas agrícolas.

      separador
      #t_3_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 3.2.	Estrategias para mejorar la salud del suelo

      p La salud del suelo se entiende como su capacidad para funcionar como un ecosistema vivo, capaz de sostener la productividad agrícola, regular el ciclo de nutrientes, conservar el agua y mantener una alta diversidad biológica. Un suelo saludable presenta equilibrio entre sus propiedades físicas, químicas y biológicas, lo que permite el desarrollo adecuado de los cultivos y la sostenibilidad de los sistemas productivos.

      .row.justify-content-center.cursor-pointer.mb-5(data-aos="zoom-in-left")
        .col-xl-6.col-lg-7.col-md-10.col-12.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema3/a.png", alt="")
            .crd_hover_txt--body.bg10
              h5.mb-3 a)	Estrategias para el mejoramiento de la salud del suelo
              p.mb-0 Para mejorar la salud del suelo se pueden implementar diversas estrategias de manejo sostenible. Entre las principales se encuentra el incremento de la materia orgánica mediante el uso de compost, estiércol bien descompuesto y residuos vegetales, lo cual mejora la fertilidad y la estructura del suelo. También es fundamental la diversificación de cultivos, ya que la rotación y asociación de especies reducen plagas, enfermedades y el agotamiento de nutrientes. La reducción de la labranza intensiva contribuye a evitar la compactación y la pérdida de estructura del suelo, favoreciendo su estabilidad. Asimismo, la incorporación de microorganismos benéficos estimula los procesos biológicos relacionados con la descomposición y la disponibilidad de nutrientes. Finalmente, la implementación de sistemas agroecológicos integra estas prácticas en un enfoque sostenible que protege los recursos naturales y mejora la productividad a largo plazo.
        .col-xl-6.col-lg-7.col-md-10.col-12.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/Tema3/b.png", alt="")
            .crd_hover_txt--body.bg10
              h4.mb-3 b) Indicadores de un suelo saludable
              p.mb-0 Un suelo saludable se puede identificar mediante varios indicadores visibles y funcionales. Entre ellos se destaca una buena estructura del suelo, con agregados estables que facilitan la aireación y el desarrollo radicular. También se observa una alta actividad biológica, reflejada en la presencia de microorganismos y fauna del suelo. La presencia de lombrices es un indicador importante de fertilidad y equilibrio ecológico. Adicionalmente, un suelo saludable presenta una buena capacidad de infiltración de agua, lo que permite su adecuada retención y disponibilidad para las plantas, reduciendo riesgos de erosión y escorrentía.






</template>

<script>
export default {
  name: 'Tema3',
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
