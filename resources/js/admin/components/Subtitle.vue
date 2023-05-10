<template>
  <h1>Soy el subtitulo con el valor de {{ subTitle }}</h1>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    subTitle: {
      type: Number,
      required: true,
    }
  }
}
</script>