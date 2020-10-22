<template>
  <div>
    <MainTitle/>
    <Filters/>
  </div>
</template>

<script>
import MainTitle from "../components/MainTitle";
import Filters from "../components/Filters";

export default {
  name: 'Home',
  components: {
    Filters,
    MainTitle
  }
}
</script>
