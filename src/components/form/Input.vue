<template>
  <div class="input-wrap">
    <label v-if="data.label !== undefined">
      {{data.label}}
    </label>
    <div class="input">
      <input v-model="value" type="text">
      <div :class="value === '' ? '' : 'transparent'" class="input__placeholder">
        {{data.placeholder}}
      </div>
    </div>
  </div>
</template>

<script>
import inputMixin from "@/assets/mixins/inputMixin";
export default {
  name: "Input",
  mixins: [inputMixin]
}
</script>

<style lang="scss">
  .input {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 195px;
    width: 100%;
    height: 45px;
    max-height: 100%;
    padding: 10px 18px;
    color: $main;
    background-color: #fff;
    border-radius: 2px;
    @media (max-width: $exlarg) {
      min-width: 140px;
      padding: 10px 10px;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 18px;
      width: 100%;
      height: 100%;
      font-size: inherit;
      border: none;
      background-color: transparent;
      @media (max-width: $exlarg) {
        padding: 10px 10px;
      }
    }
    &__placeholder {;
      color: $placeholder;
    }
    &-wrap {
      display: flex;
      align-items: center;
      label {
        color: #000;
      }
    }
    &-simple {
      margin-bottom: 11px;
      .input {
        min-width: 455px;
        padding: 0 30px;
        color: $main;
        background-color: #f5f7f9;
        border: 1px solid #d8e0e5;
        border-radius: 2px;
        @media (max-width: $exlarg) {
          min-width: 310px;
          padding: 0 19px;
        }
        @media (max-width: $md) {
          min-width: unset;
          width: calc(100% - 75px);
          padding: 0 10px;
          font-size: 14px;
        }
        input {
          padding: 0 30px;
          @media (max-width: $exlarg) {
            padding: 0 19px;
          }
          @media (max-width: $md) {
            padding: 0 10px;
          }
        }
      }
      label {
        min-width: 197px;
        font-weight: bold;
        @media (max-width: $md) {
          min-width: unset;
          width: 75px;
          padding-right: 10px;
          font-size: 14px;
        }
      }
    }
  }
  .transparent {
    opacity: 0;
  }
</style>