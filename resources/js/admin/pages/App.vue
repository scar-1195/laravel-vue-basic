<!-- Aqui se ponen las etiquetas HTML y Componentes -->
<template>
  <div>
    <Title title="Titulo enviado desde las props"/>
    <Subtitle :sub-title="counter"/>
  </div>
</template>

<!-- Todas las importaciones, props, informacion del componente -->
<script>
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";
export default {
  name: "App",
  components: {Title, Subtitle},
  data: () => ({
    name: 'Oscar',
    counter: 10,
  }),

  methods: {
    increment() {
      this.counter = this.counter + 1;
    }
  }
}
</script>