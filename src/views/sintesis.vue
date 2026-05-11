<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La comprensión y aplicación de las propiedades biológicas del suelo, junto con las prácticas de manejo y conservación, son fundamentales para el desarrollo de sistemas agrícolas sostenibles y eficientes. El suelo debe entenderse como un sistema vivo en el que interactúan organismos, materia orgánica y procesos biológicos que influyen directamente en su fertilidad y en la productividad de los cultivos. Esta visión integral permite reconocer la importancia de los procesos de descomposición, reciclaje de nutrientes y formación de estructuras que mejoran la disponibilidad de agua y aire, optimizando así el desarrollo de las plantas, fortaleciendo su resiliencia y reduciendo la dependencia de insumos externos.
    p De igual manera, la implementación de prácticas de manejo sostenible, como el uso de abonos orgánicos, la conservación de la cobertura vegetal y la reducción de la degradación del suelo, contribuye al mantenimiento de su calidad y funcionalidad a largo plazo. Estas acciones favorecen la biodiversidad del suelo, mejoran su estructura y promueven sistemas productivos más equilibrados y respetuosos con el medio ambiente. En este sentido, se fortalecen competencias para analizar y aplicar estrategias de manejo del suelo, promoviendo el uso responsable del recurso y el mejoramiento de la productividad agrícola de manera sostenible.
    

    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de síntesis sobre las propiedades biológicas del suelo, su manejo y conservación en la agricultura, y su relación con la producción y la salud del suelo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
