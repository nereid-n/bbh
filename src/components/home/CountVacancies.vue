<template>
  <div class="viewForm">
    <div class="viewForm__text">
      Показывать вакансий<br>на странице:
    </div>
    <Select
        class="viewForm__input viewForm__input-count"
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
      data: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: '25'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>