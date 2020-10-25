<template>
  <div class="select-phone">
    <Select
        :default-value="0"
        :data="select"
        class="filter__form-input"
    />
    <Input
        :data="input"
        class="filter__form-input"
    />
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Input from "@/components/form/Input";
export default {
  name: "SelectPhone",
  components: {Input, Select},
  data() {
    return {
      select: {
        options: {
          0: {
            img: '/img/phones/ru.png',
            value: '<span class="country">Россия</span>' +
                '<span class="country-num">+7</span>'
          },
          1: {
            img: '/img/phones/uk.png',
            value: '<span class="country">Украина</span>' +
                '<span class="country-num">+3</span>'
          },
          2: {
            img: '/img/phones/kk.png',
            value: '<span class="country">Казахстан</span>' +
                '<span class="country-num">+7</span>'
          },
          3: {
            img: '/img/phones/az.png',
            value: '<span class="country">Азербайджан</span>' +
                '<span class="country-num">+994</span>'
          },
          4: {
            img: '/img/phones/hy.png',
            value: '<span class="country">Армения</span>' +
                '<span class="country-num">+374</span>'
          },
          5: {
            img: '/img/phones/tg.png',
            value: '<span class="country">Таджикистан</span>' +
                '<span class="country-num">+992</span>'
          },
          6: {
            img: '/img/phones/mo.png',
            value: '<span class="country">Молдова</span>' +
                '<span class="country-num">+373</span>'
          },
          7: {
            img: '/img/phones/uz.png',
            value: '<span class="country">Узбекистан</span>' +
                '<span class="country-num">+998</span>'
          }
        }
      },
      input: {
        placeholder: 'Телефон'
      }
    }
  }
}
</script>

<style lang="scss">
  .select-phone {
    display: flex;
    min-width: 540px;
    @media (max-width: $exlarg) {
      min-width: 280px;
    }
    @media (max-width: $xl) {
      min-width: calc((100% - 63px) / 2);
      width: calc((100% - 63px) / 2);
      margin-right: 0;
    }
    @media (max-width: $lg) {
      min-width: unset;
      width: 100%;
    }
    .select__dropdown {
      width: 270px;
      img {
        margin-right: 25px;
      }
      .country-num {
        margin-left: 5px;
      }
    }
    .select__text {
      img {
        margin-right: 25px;
      }
      .country {
        font-size: 12px;
        color: #c1c1c1;
        &-num {
          margin-left: 4px;
          color: #3f3f3f;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .select__arrow {
      right: unset;
      left: 49px;
      @media (max-width: $exlarg) {
        left: 40px;
      }
    }
    .input {
      min-width: unset;
    }
    .filter__form-input {
      margin-right: 0;
      .input__placeholder {
        @media (max-width: $md) {
          display: block;
        }
      }
    }
    .select-wrap {
      flex-grow: unset;
      margin-right: -1px;
      @media (max-width: $xl) {
        display: block;
      }
      .input {
        padding-right: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    .input-wrap {
      .input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        input {
          color: #3f3f3f;
        }
      }
    }
  }
</style>