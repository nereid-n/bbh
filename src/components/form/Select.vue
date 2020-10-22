<template>
  <div class="select-wrap" :class="data.defaultValue === undefined ? '' : 'select-fill'">
    <div class="input">
      <div v-if="data.defaultValue === undefined" class="input__placeholder">
        {{data.placeholder}}
      </div>
      <div v-else class="select__text">
        {{selectText}}
      </div>
      <div class="select__arrow"></div>
    </div>
    <div class="select__dropdown">

    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    selectText() {
      for (let key in this.data.options) {
        const option = this.data.options[key];
        if (option.key === this.data.defaultValue) {
          return option.value;
        }
      }
      return '';
    }
  }
}
</script>

<style lang="scss">
  .select {
    &__text {
      color: $primary;
      font-size: 16px;
      @media (max-width: 1540px) {
        font-size: 14px;
      }
    }
    &__arrow {
      position: absolute;
      top: calc(50% + 1px);
      right: 10px;
      transform: translateY(-50%);
      &:before {
        color: $placeholder;
        font-size: 24px;
        font-family: 'icomoon';
        content: '\e900';
      }
    }
    &-fill {
      .select__arrow {
        &:before {
          color: $primaryText;
        }
      }
    }
  }
</style>