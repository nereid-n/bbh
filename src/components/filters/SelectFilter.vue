<template>
  <Select
      :data="mainFilter"
      :defaultValue="defaultValue"
      @onInput="onMainSelect"
      class="filter__form-input"
  />
</template>

<script>
import Select from "@/components/form/Select";
import mainFilterMixin from "@/assets/mixins/mainFilterMixin";
export default {
name: "SelectFilter",
  components: {Select},
  props: {
    defaultValue: {}
  },
  mixins: [mainFilterMixin]
}
</script>

<style scoped>

</style>