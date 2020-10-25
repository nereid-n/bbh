<template>
  <div class="filter">
    <div class="container">
      <div class="filter__content postcode__filter">
        <div class="filter__logo">
          <router-link to="/" class="logo">
            <img src="/img/logo.png" alt="">
          </router-link>
        </div>
        <div class="filter__main">
          <div class="filter__form">
            <SelectFilter :default-value="'postcode'"/>
            <Input class="filter__form-input" :data="country"/>
            <Input class="filter__form-input" :data="street"/>
            <Input class="filter__form-input" :data="home"/>
            <Input class="filter__form-input" :data="corp"/>
            <button class="filter__btn">Найти</button>
          </div>
        </div>
      </div>
      <div class="filter__mobile">
        <FilterMobileMain :active="'postcode'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SelectFilter from "@/components/filters/SelectFilter";
import Input from "@/components/form/Input";
import mainFilterMixin from "@/assets/mixins/mainFilterMixin";
import FilterMobileMain from "@/components/home/FilterMobileMain";
export default {
  name: "PostcodeFilter",
  components: {FilterMobileMain, Input, SelectFilter},
  data() {
    return {
      country: {
        placeholder: 'Страна / Регион / Населенный пункт'
      },
      street: {
        placeholder: 'Введите название улицы'
      },
      home: {
        placeholder: 'Дом'
      },
      corp: {
        placeholder: 'Корп.'
      },
    }
  },
  mixins: [mainFilterMixin]
}
</script>

<style scoped>

</style>