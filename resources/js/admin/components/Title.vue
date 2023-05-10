<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>