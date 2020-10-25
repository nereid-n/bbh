<template>
  <div class="viewForm">
    <div class="viewForm__text">
      Показывать вакансий<br>на странице:
    </div>
    <Select
        class="viewForm__input viewForm__input-count"
        :default-value="value"
        :data="data"
    />
  </div>
</template>

<script>
import Select from "@/components/form/Select";
export default {
  name: "CountVacancies",
  components: {Select},
  data() {
    return {
      value: 25,
      data: {
        options: {
          5: '5',
          10: '10',
          25: '25',
          50: '50',
          100: '100'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>