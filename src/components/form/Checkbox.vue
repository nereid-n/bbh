<template>
  <div class="checkbox-wrap">
    <input ref="input" @change="onInput" :id="data.id" :checked="checked" type="checkbox">
    <label :for="data.id">
      <Icon v-if="data.icon !== undefined" :icon="data.icon"/>
      <span>{{data.text}}</span>
      <i
          v-if="data.question !== undefined"
          class="question__icon icon-question-circle-alt"
          v-tooltip.bottom="data.question"
      ></i>
    </label>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import inputMixin from "@/assets/mixins/inputMixin";
export default {
  name: "Checkbox",
  components: {Icon},
  methods: {
    onInput(value) {
      value = value.target.checked;
      let name;
      if (this.data.name !== undefined) {
        name = this.data.name;
      } else {
        name = this.data.id;
      }
      this.$emit('onInput', {value: value, name: name, text: this.data.text});
    }
  },
  props: {
    checked: {
      default: false,
      type: Boolean
    },
    clear: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    checked() {
      this.$emit('onInput', {value: this.checked, name: this.data.name, text: this.data.text});
    },
    clear() {
      if (!this.clear) {
        this.$refs.input.checked = false;
      }
      this.$emit('onInput', {value: false, name: this.data.name, text: this.data.text});
    }
  },
  created() {
    if (this.checked) {
      this.$emit('onInput', {value: this.checked, name: this.data.name, text: this.data.text});
    }
  },
  destroyed() {
    this.$emit('onInput', {value: false, name: this.data.name, text: this.data.text});
  },
  mixins: [inputMixin]
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
      width: 100%;
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
    margin-left: auto;
    margin-bottom: -2px;
    font-size: 18px;
    color: #a9a9a9;
  }
</style>