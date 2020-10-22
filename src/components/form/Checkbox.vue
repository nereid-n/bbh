<template>
  <div class="checkbox-wrap">
    <input :id="data.id" type="checkbox">
    <label :for="data.id">{{data.text}}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss">
  .checkbox-wrap {
    position: relative;
    cursor: pointer;
    input {
      position: absolute;
      opacity: 0;
      &:checked + label {
        color: $primaryText;
        &:after {
          border-color: $primaryText;
        }
        &:before {
          opacity: 1;
        }
      }
    }
    label {
      cursor: pointer;
      padding-left: 30px;
      color: $grayText;
      font-size: 14px;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 5.2px;
        border: 1px solid #5c6266;
      }
      &:before {
        content: '\e90c';
        position: absolute;
        top: -5px;
        left: -2px;
        color: $primaryText;
        font-family: 'icomoon';
        font-size: 24px;
        opacity: 0;
      }
    }
  }
</style>