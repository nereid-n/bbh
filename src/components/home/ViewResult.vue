<template>
  <div class="viewForm">
    <div class="viewForm__text">
      Вид:
    </div>
    <Select
        class="viewForm__input select__dropdown-left select__viewFrom-wrap"
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
      value: 1,
      view: {
        name: 'view',
        options: {
          0: '<div class="viewRows-select-item-wrap"><div class="viewRows"><span></span><span></span><span></span><span></span><span></span></div><div class="select__text-hide">Компактный</div></div>',
          1: '<div class="viewRows-select-item-wrap"><div class="viewRows"><span></span><span></span><span></span></div><div class="select__text-hide">Расширенный</div></div>'
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
    &-select-item-wrap {
      display: flex;
      align-items: center;
      .select__text-hide {
        margin-left: 5px;
      }
    }
  }
  .select__viewFrom-wrap {
    .select__dropdown-item {
      position: relative;
      &:hover {
        color: $primary;
        background-color: #fff;
        &:before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          width: 3px;
          background-color: $primary;
        }
        .viewRows span {
          background-color: $primary;
        }
      }
    }
  }
</style>