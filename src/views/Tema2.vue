<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo y conservación de suelos

    .bloque-texto-g.bloque-texto-g--inverso.bg06.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
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

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
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
      .col-lg-5.col-10
        img(src="@/assets/curso/Tema2/img02.svg")

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
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
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-6.col-10.mb-3
        img(src="@/assets/curso/Tema2/img03.png")
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Producción sostenible")
            .col-md-12.mb-4.mb-md-0
              p Busca mantener o aumentar la productividad sin deteriorar el suelo.
          .row(numero="2" titulo="Conservación del recurso suelo")
            .col-md-12.mb-4.mb-md-0
              p Prioriza la protección frente a la erosión, compactación y pérdida de fertilidad.
          .row(numero="3" titulo="Equilibrio ecológico")
            .col-md-12.mb-4.mb-md-0
              p Promueve la biodiversidad y los procesos naturales del suelo.
          .row(numero="4" titulo="Eficiencia en el uso de insumos")
            .col-md-12.mb-4.mb-md-0
              p Reduce la dependencia de productos químicos.
    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1.	 Degradación de suelos

    .row.justify-content-center.align-items-center.mb-5.bg003(data-aos="zoom-in-left")
      .col-lg-7
        p.p-5 La degradación del suelo es el proceso mediante el cual este recurso pierde su capacidad productiva y funcional, afectando sus propiedades físicas, químicas y biológicas. Este fenómeno puede ser causado por prácticas agrícolas inadecuadas, factores climáticos y actividades humanas no sostenibles. 
      .col-lg-5
        img.d-none.d-lg-block(src="@/assets/curso/Tema2/img05.png")
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text Se clasifica principalmente en tres tipos

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-4.col-8.mb-3
        img(src="@/assets/curso/Tema2/img04.png")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="a)	Degradación física")
            .col-md-11.mb-4.mb-md-0
              p La degradación física del suelo afecta sus características estructurales, modificando negativamente la porosidad, la aireación y la capacidad de retención de agua. A continuación, se presentan sus principales formas.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Compactación:] ocurre cuando el suelo se vuelve denso y duro, reduciendo el espacio poroso. Es causada por el uso de maquinaria pesada, pisoteo excesivo o labranza intensiva. 
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Pérdida de estructura:] se da cuando los agregados del suelo se desintegran, afectando su estabilidad. 
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Erosión:] aunque también tiene componentes químicos, implica la pérdida física de la capa superficial por acción del agua o el viento. 
              h3 Consecuencias:
            .col-md-6.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  | Disminución de la infiltración de agua. 
                li.d-flex
                  i.fas •
                  | Dificultad para el crecimiento de raíces. 
            .col-md-5.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  | Reducción de la actividad biológica. 
                li.d-flex
                  i.fas •
                  | Mayor susceptibilidad a la erosión. 
          .row.justify-content-center(titulo="b) Degradación química")
            .col-md-11.mb-2.mb-md-0
              p La degradación química implica cambios negativos en la composición química del suelo, afectando la disponibilidad de nutrientes y el desarrollo de los cultivos. se presentan sus principales formas.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Salinización:] acumulación excesiva de sales solubles, común en zonas con riego inadecuado o mal drenaje. 
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Acidificación:] disminución del pH del suelo, generalmente por uso excesivo de fertilizantes químicos o lavado de nutrientes básicos. 
                li.d-flex
                  i.fas.fa-hoja
                  p #[b Pérdida de fertilidad:] disminución de nutrientes esenciales por extracción continua sin reposición. 
            .col-md-5.mb-4.mb-md-0
              h3 Consecuencias:
            .col-md-6.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  | Toxicidad para las plantas. 
                li.d-flex
                  i.fas •
                  | Disminución en la absorción de nutrientes.  
                li.d-flex
                  i.fas •
                  | Reducción del rendimiento de los cultivos. 
          .row.justify-content-center(titulo="c) Degradación biológica")
            .col-md-11.mb-2.mb-md-0
              p La degradación biológica del suelo afecta la vida del ecosistema edáfico, disminuyendo la cantidad y diversidad de organismos que desempeñan funciones esenciales para su equilibrio y funcionamiento. A continuación, se presentan sus principales causas.
            .col-md-5.mb-0.mb-md-0  
              ul.lista-ul
                li.d-flex
                  i.fas.fa-hoja
                  p Uso excesivo de agroquímicos. 
                li.d-flex
                  i.fas.fa-hoja
                  p Quema de residuos agrícolas. 
            .col-md-6.mb-2.mb-md-0    
                li.d-flex
                  i.fas.fa-hoja
                  p.px-2 Pérdida de materia orgánica. 
                li.d-flex
                  i.fas.fa-hoja
                  p.px-2 Labranza intensiva. 
            .col-md-3.mb-4.mb-md-0
              h3 Consecuencias:
            .col-md-8.mb-4.mb-md-0
              ul.lista-ul
                li.d-flex
                  i.fas •
                  | Disminución de la actividad microbiana. 
                li.d-flex
                  i.fas •
                  | Alteración de procesos como descomposición y mineralización. 
                li.d-flex
                  i.fas •
                  | Reducción de la fertilidad natural del suelo. 
                li.d-flex
                  i.fas •
                  | Menor resiliencia frente a plagas y enfermedades. 


    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2.	Conservación de suelos

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="zoom-in-left")
      .col-lg-4.col-10.mb-3
        img(src="@/assets/curso/Tema2/img06.svg")
      .col-lg-8.bg03.p-5.mb-3
        p La conservación de suelos comprende el conjunto de prácticas, técnicas y estrategias orientadas a proteger el suelo de procesos de degradación como la erosión, la pérdida de fertilidad, la compactación y la disminución de la biodiversidad. Su propósito es mantener la capacidad productiva del suelo a largo plazo, asegurando su uso sostenible en los sistemas agrícolas.
        p Este enfoque parte del principio de que el manejo del suelo debe estar adaptado a las condiciones específicas del entorno, tales como el clima, la topografía, el tipo de suelo, la disponibilidad de agua y las características del sistema productivo.
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text a) Técnicas


    .tarjeta.fondo02.p-4.mb-4(data-aos="zoom-in-left")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="Cobertura vegetal")
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/Tema2/2.png', alt='')
          .col-lg-6
            h5 Cobertura vegetal
            p Consiste en mantener el suelo cubierto con plantas vivas.
            p La cobertura vegetal puede ser natural, como la vegetación espontánea, o sembrada, e incluye pastos, leguminosas o restos de cultivos. Su función principal es reducir el impacto directo de la lluvia sobre el suelo, disminuir la erosión hídrica y eólica, favorecer la infiltración del agua y proteger la capa superficial rica en nutrientes. Esta práctica se considera una de las más efectivas y económicas para la conservación del suelo, especialmente en zonas con pendientes pronunciadas o con lluvias intensas. 
        .row.justify-content-center(titulo="<i>Mulching</i>")
          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/Tema2/1.png', alt='')
          .col-lg-6
            h5 #[em Mulching]
            p Consiste en cubrir el suelo con materiales orgánicos (paja, hojas secas, residuos de cosecha) o inorgánicos.
            p El #[em mulching] consiste en la formación de una capa protectora sobre el suelo, la cual puede ser temporal o permanente. Sus funciones principales incluyen la reducción de la evaporación del agua, la regulación de la temperatura del suelo, la disminución del crecimiento de malezas y, en el caso de materiales orgánicos, el aporte de materia orgánica al descomponerse. Esta práctica es especialmente útil en la agricultura urbana y en zonas con escasez de agua, ya que mejora la eficiencia en el uso del recurso hídrico.
        
        .row.justify-content-center(titulo="Agroforestería")
          .col-lg-3.mb-4.mb-md-0.col-8
            figure
              img(src='@/assets/curso/Tema2/3.png', alt='')
          .col-lg-9
            h5 Agroforestería
            p Es un sistema de producción que integra árboles, cultivos y/o animales en un mismo espacio, generando interacciones beneficiosas.
            p La agroforestería combina especies leñosas con cultivos agrícolas e incluye sistemas como cercas vivas, sistemas silvopastoriles o asociaciones de cultivos con árboles. Sus funciones principales consisten en reducir la erosión mediante la protección del suelo con raíces y follaje, mejorar la estructura del suelo, aportar materia orgánica a través de la caída de hojas y regular el microclima mediante la generación de sombra y la conservación de la humedad. Esta práctica favorece la sostenibilidad, diversifica la producción y mejora la resiliencia de los sistemas agrícolas frente al cambio climático.
        
        .row.justify-content-center(titulo="Cultivos de cobertura")
          .col-lg-3.mb-4.mb-md-0.col-8
            figure
              img(src='@/assets/curso/Tema2/4.png', alt='')
          .col-lg-9
            h5 Cultivos de cobertura
            p Son plantas sembradas con el objetivo principal de proteger y mejorar el suelo, más que para cosecha.
            p Las plantas de cobertura incluyen ejemplos como las leguminosas (frijol, trébol) y las gramíneas (avena, centeno). Sus funciones principales consisten en proteger el suelo contra la erosión, mejorar su estructura mediante el desarrollo de raíces que favorecen la aireación, aumentar la materia orgánica, fijar nitrógeno en el caso de las leguminosas y contribuir al control de malezas. Estas especies son fundamentales en sistemas agrícolas sostenibles, ya que permiten la recuperación de suelos degradados y el mantenimiento de su fertilidad de forma natural.
    p Nota: los cultivos de cobertura son un tipo específico de cobertura vegetal, pero planificada y sembrada intencionalmente; se siembran con un objetivo agronómico definido.

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3.	Manejo sostenible del suelo

    p El manejo sostenible del suelo es el conjunto de prácticas y estrategias orientadas a utilizar, conservar y mejorar el suelo de manera responsable, garantizando su productividad actual sin comprometer su capacidad para las futuras generaciones.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text a)	Estrategias clave
    

    SlyderF(columnas="col-lg-6 col-xl-4").mb-4(data-aos="zoom-in-left")
      .tarjeta.bgsly.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema2/01.png' alt='')
        h4.text-center Labranza de conservación
        p.text-center Consiste en reducir al mínimo la remoción del suelo, manteniendo residuos vegetales en la superficie.
      .tarjeta.bgsly.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema2/02.png' alt='')
        h4.text-center Rotación y asociación de cultivos
        p.text-center Estas prácticas consisten en alternar o combinar diferentes especies vegetales en un mismo espacio o en diferentes ciclos.

      .tarjeta.bgsly.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema2/03.png' alt='')
        h4.text-center Uso eficiente del agua
        p.text-center Implica aplicar este recurso de manera adecuada, oportuna y controlada, evitando pérdidas y desperdicios.

      .tarjeta.bgsly.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/Tema2/04.png' alt='')
        h4.text-center Manejo integrado de nutrientes
        p.text-center Consiste en combinar diferentes fuentes de fertilización (orgánica e inorgánica) de manera equilibrada, según las necesidades del suelo y del cultivo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema3/ico.svg")
            h3.bg001.py-2.w-card-text Enfoque agroecológico

    p El enfoque agroecológico en el manejo del suelo se basa en la aplicación de principios ecológicos al sistema productivo, buscando armonizar la producción agrícola con el funcionamiento natural de los ecosistemas. Este enfoque promueve la autosuficiencia, el uso de recursos locales y el fortalecimiento del equilibrio ecológico, reduciendo la dependencia de insumos externos.





















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
