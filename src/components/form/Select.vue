<template>
  <div class="select-wrap" :class="wrapClass">
    <div class="input" @click="focus = !focus">
      <div v-if="defaultValue === undefined" class="input__placeholder">
        {{data.placeholder}}
      </div>
      <div v-else class="select__text">
        <span
            v-if="typeof data.options[value] === 'string'"
            v-html="data.options[value]"
        ></span>
        <template v-else>
          <img v-if="data.options[value].img !== undefined" :src="data.options[value].img" alt="">
          <span v-html="data.options[value].value"></span>
        </template>
      </div>
      <div class="select__arrow"></div>
    </div>
    <div class="select__dropdown">
      <div
          v-for="(value, key, index) in data.options"
          class="select__dropdown-item"
          @click="clickItem(key)"
      >
        <span
            class="select__dropdown-item-content"
            v-if="typeof value === 'string'"
            v-html="value"
        ></span>
        <template v-else>
          <router-link
              class="select__dropdown-item-content"
              v-if="value.link !== undefined"
              :to="value.link"
              v-html="value.value"
          ></router-link>
          <div v-else class="select__dropdown-item-content">
            <img v-if="value.img !== undefined" :src="value.img" alt="">
            <span v-html="value.value"></span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import inputMixin from "@/assets/mixins/inputMixin";

export default {
  name: "Select",
  methods: {
    clickItem(key) {
      this.focus = false;
      this.value = key;
      this.onInput(key);
    }
  },
  mixins: [inputMixin]
}
</script>

<style lang="scss">
  .select {
    &__arrow {
      position: absolute;
      top: calc(50% - 12px);
      right: 10px;
      &:before {
        color: $placeholder;
        font-size: 24px;
        font-family: 'icomoon';
        content: '\e900';
      }
    }
    &-wrap {
      position: relative;
      font-size: 16px;
      @media (max-width: $exlarg) {
        font-size: 14px;
      }
      .input__placeholder {
        padding-right: 20px;
      }
      .input {
        cursor: pointer;
      }
      &.input {
        &-active {
          .select__dropdown {
            display: block;
          }
          .select__arrow {
            top: calc(50% - 14px);
            transform: rotate(180deg);
          }
        }
      }
    }
    &__dropdown {
      display: none;
      position: absolute;
      z-index: 50;
      top: calc(100% + 4px);
      left: 0;
      min-width: 100%;
      font-size: 14px;
      background-color: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      &-item {
        white-space: nowrap;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: $primary;
        }
        a {
          color: inherit;
        }
        &-content {
          display: flex;
          align-items: center;
          padding: 10px 18px;
          @media (max-width: $exlarg) {
            padding: 10px 10px;
          }
        }
      }
    }
    &__text {
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
      }
    }
  }
  .select-link {
    font-size: 18px;
    @media (max-width: $xl) {
      font-size: 14px;
    }
    .input {
      height: 30px;
      padding: 5px 30px 5px 0;
      background-color: transparent;
      @media (max-width: $xl) {
        padding-right: 20px;
      }
    }
    .select__arrow {
      right: 0;
      &:before {
        @media (max-width: $xl) {
          font-size: 20px;
        }
      }
    }
    .select__text {
      color: $links;
      font-weight: 100;
      border-bottom: 1px dotted $links;
    }
    &.input-filled {
      .select__arrow {
        &:before {
          color: $links;
        }
      }
    }
  }
</style>