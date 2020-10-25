<template>
  <div class="mobile-find">
    <div class="container">
      <div class="mobile-find__form">
        <div class="mobile-find__title">
          Все Вакансии На одном сайте:<br>Найдите подходящую работу.<br>
          <span>Прямо сейчас.</span>
        </div>
        <Input
            :data="input"
        />
        <Select
            :data="select"
            :default-value="0"
        />
        <button @click="btnClick" class="mobile-find__btn btn">Найти</button>
      </div>
      <div class="mobile-find__link-wrap">
        <router-link to="/" class="mobile-find__link">
          Расширенный поиск
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Input from "@/components/form/Input";
export default {
  name: "MobileFind",
  components: {Input, Select},
  data() {
    return {
      input: {
        placeholder: 'Название вакансии'
      },
      select: {
        options: {
          0: 'Вакансии + Резюме',
          1: 'Вакансии',
          2: 'Резюме',
          3: 'Телефон',
          4: 'Индекс'
        }
      }
    }
  },
  methods: {
    btnClick() {
      let home = document.getElementsByClassName('home')[0];
      home.classList.remove('home-first');
      home.classList.add('home-second');
    }
  }
}
</script>

<style lang="scss">
  .mobile-find {
    display: none;
    padding: 10px 0 12px;
    color: #fff;
    background: linear-gradient(45deg, #f32a37, #fe575d);
    @media (max-width: $md) {
      display: block;
    }
    &__title {
      margin-bottom: 11px;
      font-size: 19px;
      font-weight: 300;
      line-height: 26px;
      span {
        font-weight: 500;
      }
    }
    .input-wrap {
      margin-bottom: 7px;
    }
    .input {
      height: 39px;
    }
    &__btn {
      display: block;
      width: 100%;
      margin-top: 15px;
      padding: 13px 15px;
      text-transform: none;
      color: #fff;
      background-color: #f9af41;
      border: none;
      border-radius: 2px;
    }
    &__link {
      color: inherit;
      font-size: 15px;
      font-weight: 300;
      border-bottom: 1px solid;
      &-wrap {
        display: flex;
        justify-content: flex-end;
        margin-top: 7px;
      }
    }
  }
</style>