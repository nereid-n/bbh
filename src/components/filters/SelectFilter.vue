<template>
  <Select
      :data="mainFilter"
      :defaultValue="defaultValue"
      @onInput="onMainSelect"
      class="filter__form-input select-type"
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

<style lang="scss">
  .select-type {
    min-width: 170px;
  }
</style>