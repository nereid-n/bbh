<template>
  <i :class="`icon-star-alt ${favorite ? 'active' : ''}`"></i>
</template>

<script>
export default {
  name: "Favorite",
  props: {
    favorite: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">

</style>