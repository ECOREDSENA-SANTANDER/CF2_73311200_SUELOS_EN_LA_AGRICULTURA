<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo y conservación de suelos

    .bloque-texto-g.bloque-texto-g--inverso.bg06.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo y conservación de suelos hace referencia al conjunto de prácticas, técnicas y estrategias orientadas a mantener, mejorar y proteger las propiedades físicas, químicas y biológicas del suelo, garantizando su productividad a largo plazo y evitando procesos de degradación.
          br
          br
          | Este enfoque implica el uso racional del suelo como recurso natural, promoviendo su aprovechamiento sostenible mediante acciones que reduzcan la erosión, conserven la fertilidad, mejoren la estructura y favorezcan la actividad biológica. Asimismo, busca equilibrar la producción agrícola con la protección del medio ambiente, asegurando que el suelo continúe cumpliendo sus funciones ecológicas y productivas.
        
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text Importancia del manejo sostenible del suelo

    p El suelo es un recurso no renovable a corto plazo, por lo que su manejo adecuado es esencial.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-12.col-lg-12
              .d-flex.align-items-center
                img.w-card-icon(src="@/assets/curso/Tema3/ico2.svg")
                h3.bg02.py-2.w-card-text.text-white a) Principios
        p El uso racional de los recursos: implica aprovechar de manera eficiente, equilibrada y responsable los elementos disponibles en el sistema productivo, como el suelo, el agua, los nutrientes y la energía.
        ul.lista-ul
          li.d-flex
            i.fas.fa-hoja
            | Aplicación adecuada de fertilizantes y enmiendas según las necesidades del cultivo.
          li.d-flex
            i.fas.fa-hoja
            | Uso eficiente del agua mediante prácticas como riego tecnificado o conservación de humedad.
          li.d-flex
            i.fas.fa-hoja
            | Aprovechamiento de residuos orgánicos para la fertilización del suelo.
          li.d-flex
            i.fas.fa-hoja
            | Reducción del desperdicio de insumos.
      .col-lg-5
        img(src="@/assets/curso/Tema2/img02.svg")

    .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.bg04.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/Tema2/a.svg', alt='Texto que describa la imagen')          
              h2.text-center Conservación de la biodiversidad
              p La biodiversidad del suelo incluye microorganismos, fauna edáfica y vegetación asociada, los cuales cumplen funciones esenciales en el equilibrio del ecosistema.
              ul.lista-ul
                li.d-flex
                  i.fas •
                  | Protección de organismos del suelo como lombrices, bacterias y hongos.
                li.d-flex
                  i.fas •
                  | Uso de prácticas como rotación de cultivos y asociaciones vegetales.
                li.d-flex
                  i.fas •
                  | Reducción del uso de agroquímicos que afectan la vida del suelo.
                li.d-flex
                  i.fas •
                  | Mantenimiento de coberturas vegetales.
            .col-md.tarjeta.bg05.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/Tema2/b.svg', alt='Texto que describa la imagen')          
              h2.text-center.text-white Minimización del impacto ambiental
              p.text-white Este principio busca reducir los efectos negativos de la actividad agrícola sobre el entorno natural.
              ul.lista-ul.text-white
                li.d-flex
                  i.fas •
                  | Disminución de la contaminación del suelo y del agua por agroquímicos.
                li.d-flex
                  i.fas •
                  | Prevención de la erosión mediante prácticas de conservación (barreras vivas, cobertura vegetal).
                li.d-flex
                  i.fas •
                  | Manejo adecuado de residuos agrícolas.
                li.d-flex
                  i.fas •
                  | Promoción de prácticas sostenibles como la agricultura ecológica y urbana.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema3/ico2.svg")
          h3.bg02.py-2.w-card-text.text-white b) Enfoque actual

    p El manejo sostenible integra prácticas tradicionales y tecnología moderna para optimizar la producción sin degradar el suelo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src="@/assets/curso/Tema2/img03.png")
      .col-lg-6













</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
