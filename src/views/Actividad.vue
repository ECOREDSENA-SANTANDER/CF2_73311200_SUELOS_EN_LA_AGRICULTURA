<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Propiedades biológicas, manejo y conservación del suelo en la agricultura.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el nivel de comprensión de los aprendices sobre las propiedades biológicas del suelo, su importancia en la producción agrícola, así como las prácticas de manejo y conservación orientadas a la sostenibilidad. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'La biología del suelo estudia principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La textura del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los organismos vivos del suelo y sus interacciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La composición mineral del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El color del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 2,
          texto: 'La materia orgánica en el suelo contribuye a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la erosión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la estructura y fertilidad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 3,
          texto: '¿Cuál de los siguientes es un organismo del suelo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arcilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bacterias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Minerales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 4,
          texto: 'La descomposición de materia orgánica es un proceso:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mecánico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Químico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Biológico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 5,
          texto: 'La fertilidad del suelo depende en gran medida de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actividad biológica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tamaño del terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El clima únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 6,
          texto: 'Una enmienda orgánica tiene como función principal:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compactar el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar las propiedades del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar nutrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 7,
          texto: 'La degradación del suelo puede ser causada por:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buenas prácticas agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso adecuado del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobreexplotación y malas prácticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rotación de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 8,
          texto: 'La erosión del suelo es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdida de la capa superficial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incremento de materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formación de microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 9,
          texto: 'El manejo sostenible del suelo busca:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Explotar al máximo el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener su productividad a largo plazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar materia orgánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 10,
          texto: '¿Cuál de las siguientes labores mejora la salud del suelo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso excesivo de químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quema de residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incorporación de abonos orgánicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Labranza intensiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },
        {
          id: 11,
          texto: 'La biodiversidad del suelo está relacionada con:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variedad de organismos vivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tamaño del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de fertilizantes químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 12,
          texto: 'Un suelo saludable se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja actividad biológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta compactación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Equilibrio biológico y buena fertilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ausencia de microorganismos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 13,
          texto: 'La conservación del suelo busca principalmente:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la erosión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger y mantener sus propiedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir su uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 14,
          texto: 'La lombriz de tierra es importante porque:',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compacta el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora la aireación y fertilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina materia orgánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 15,
          texto: 'El ciclo de nutrientes permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Perder nutrientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar organismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transformar y reutilizar nutrientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 16,
          texto: 'Una práctica de conservación del suelo es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tala indiscriminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monocultivo intensivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cobertura vegetal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de pesticidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 17,
          texto:
            'El impacto del manejo del suelo en los cultivos se refleja en:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La productividad y calidad de los cultivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de herramientas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El clima únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 18,
          texto: '¿Qué afecta negativamente la biología del suelo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de compost.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rotación de cultivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incorporación de materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso excesivo de agroquímicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 19,
          texto: 'La simbiosis en el suelo ocurre cuando:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dos organismos compiten.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dos organismos se benefician mutuamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un organismo muere.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No hay interacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },

        {
          id: 20,
          texto: 'Una estrategia para mejorar la salud del suelo es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar prácticas agroecológicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la erosión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre las “Propiedades biológicas, manejo y conservación del suelo en la agricultura”.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
