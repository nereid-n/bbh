<template>
  <div class="input-wrap">
    <div class="input">
      <input v-model="text" type="text">
      <div :class="text === '' ? '' : 'transparent'" class="input__placeholder">
        {{data.placeholder}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss">
  .input {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 195px;
    height: 45px;
    padding: 10px 18px;
    color: $main;
    background-color: #fff;
    border-radius: 2px;
    @media (max-width: $exlarg) {
      min-width: 140px;
      padding: 10px 10px;
    }
    @media (max-width: $xl) {
      min-width: unset;
      height: 30px;
      border-radius: 0;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 18px;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      @media (max-width: $exlarg) {
        padding: 10px 10px;
      }
    }
    &__placeholder {;
      color: $placeholder;
      font-size: 14px;
    }
  }
  .transparent {
    opacity: 0;
  }
</style>