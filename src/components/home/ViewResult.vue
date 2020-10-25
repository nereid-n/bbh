<template>
  <div class="viewForm">
    <div class="viewForm__text">
      Вид:
    </div>
    <Select
        class="viewForm__input"
        :default-value="value"
        :data="view"
    />
  </div>
</template>

<script>
import Select from "@/components/form/Select";
export default {
  name: "ViewResult",
  components: {Select},
  data() {
    return {
      value: 0,
      view: {
        name: 'view',
        options: {
          0: '<div class="viewRows"><span></span><span></span><span></span></div>'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .viewRows {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12px;
    height: 9px;
    margin-left: -2px;
    span {
      width: 100%;
      height: 1px;
      background-color: #72797e;
    }
  }
</style>