<template>
  <div class="checkbox-wrap">
    <input :id="data.id" type="checkbox">
    <label :for="data.id">
      <Icon v-if="data.icon !== undefined" :icon="data.icon"/>
      <span>{{data.text}}</span>
      <i v-if="data.question !== undefined" class="question__icon icon-question-circle-alt"></i>
    </label>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Checkbox",
  components: {Icon},
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
    display: flex;
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
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      padding-left: 30px;
      color: $grayText;
      font-size: 14px;
      @media (max-width: $md) {
        font-size: 11px;
        line-height: 17px;
      }
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
    .designations__icon {
      margin-left: -7px;
      margin-right: 16px;
      margin-top: -5px;
    }
  }
  .question__icon {
    margin-left: 12px;
    margin-top: 2px;
    margin-bottom: -2px;
    font-size: 18px;
    color: #a9a9a9;
  }
</style>