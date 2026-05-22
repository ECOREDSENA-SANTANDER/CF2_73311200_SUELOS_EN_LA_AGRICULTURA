<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-4.col-md-7
        img(src='@/assets/curso/portada/img01.png', alt='')
      .col-lg-7.mb-0
        .row
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/portada/ico.png', alt='')
          .col-lg-10
            p La agricultura es una actividad esencial para el desarrollo de las sociedades, en la que el suelo cumple un papel fundamental como base de la producción de alimentos. Más allá de ser un soporte físico, el suelo funciona como un sistema vivo donde interactúan organismos, materia orgánica y procesos biológicos que determinan su fertilidad y productividad. Comprender las propiedades biológicas del suelo resulta clave para el manejo adecuado de los sistemas agrícolas.
        p.bg09.p-4 En el contexto actual, la intensificación productiva y el uso inadecuado de los recursos han generado procesos de degradación que afectan la calidad del suelo y disminuyen su capacidad productiva. Factores como el uso excesivo de agroquímicos, la deforestación y el manejo ineficiente han impactado negativamente su equilibrio natural. Por ello, es fundamental adoptar prácticas sostenibles que permitan conservar el suelo y garantizar su aprovechamiento responsable.
    p Las propiedades biológicas del suelo, como la actividad microbiana, la fauna edáfica y la materia orgánica, influyen en procesos esenciales como la descomposición y el reciclaje de nutrientes. Su adecuada gestión, mediante prácticas como la rotación de cultivos, el uso de abonos orgánicos y la cobertura vegetal, contribuye a mantener la fertilidad, mejorar la productividad y reducir el impacto ambiental en los sistemas agrícolas.
    
    
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
