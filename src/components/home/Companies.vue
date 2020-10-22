<template>
  <div class="container">
    <div class="companies">
      <h2 class="h2">Работа в компаниях:</h2>
      <div class="companies__list">
        <div
            v-for="company in companies"
            class="company"
        >

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
  data() {
    return {
      companies: [
        {}
      ]
    }
  }
}
</script>

<style lang="scss">

</style>