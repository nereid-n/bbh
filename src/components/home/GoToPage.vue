<template>
  <div class="viewForm">
    <div class="viewForm__text">
      Перейти<br>на страницу:
    </div>
    <Input
        :data="data"
        :default-value="value"
        class="viewForm__input"
    />
    <button class="viewForm__button btn-outline-gray">ok</button>
  </div>
</template>

<script>
import Input from "@/components/form/Input";
export default {
name: "GoToPage",
  components: {Input},
  data() {
    return {
      value: 1,
      data: {
        placeholder: '',
      }
    }
  }
}
</script>

<style lang="scss">
  .viewForm {
    display: flex;
    align-items: center;
    &__text,
    &__button {
      font-size: 14px;
    }
    &__text {
      color: #72797e;
      margin-right: 15px;
      line-height: 1;
      &-bottom {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-left: 35px;
        color: $placeholder;
        font-size: 14px;
      }
    }
    &__button {
      min-width: 25px;
      margin-left: 10px;
      padding: 3px 2px;
      text-transform: uppercase;
      &:hover {
        color: #fff;
        background-color: #72797e;
        border-color: #72797e;
      }
    }
    &__input {
      &.select-fill {
        .select__arrow {
          &:before {
            color: $placeholder;
          }
        }
      }
      .input {
        min-width: 50px;
        height: 25px;
        padding: 5px 9px;
        input {
          padding: 5px 9px;
          color: $placeholder;
        }
        .select__text {
          color: $placeholder;
        }
      }
      &-count {
        .input {
          min-width: 70px;
          padding: 5px 12px;
        }
      }
    }
    &-big {
      .viewForm {
        &__text,
        &__button {
          font-size: 16px;
        }
        &__text {
          margin-right: 19px;
        }
        &__button {
          padding: 12px 11px;
        }
        &__input {
          .input {
            min-width: 70px;
            height: 45px;
          }
          & + .viewForm__text {
            margin-left: 14px;
            margin-right: 3px;
          }
        }
      }
    }
  }
</style>