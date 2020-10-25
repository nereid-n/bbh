<template>
  <div class="filter">
    <div class="container">
      <div class="filter__content">
        <div class="filter__logo">
          <router-link to="/" class="logo">
            <img src="/img/logo.png" alt="">
          </router-link>
        </div>
        <div class="filter__main">
          <div class="filter__form">
            <SelectFilter :default-value="'phone'"/>
            <SelectPhone class="filter__form-input"/>
            <div class="phone-info">
              <div class="phone-info__img">
                <img :src="phoneInfo.img" alt="">
              </div>
              <p class="phone-info__text">{{phoneInfo.text}}</p>
            </div>
            <button class="filter__btn">Найти</button>
          </div>
        </div>
      </div>
      <div class="filter__mobile">
        <div class="phone-info">
          <div class="phone-info__img">
            <img :src="phoneInfo.img" alt="">
          </div>
          <p class="phone-info__text">{{phoneInfo.text}}</p>
        </div>
        <FilterMobileMain :active="'phone'"/>
      </div>
    </div>
  </div>
</template>

<script>
import mainFilterMixin from "@/assets/mixins/mainFilterMixin";
import SelectFilter from "@/components/filters/SelectFilter";
import SelectPhone from "@/components/form/SelectPhone";
import FilterMobileMain from "@/components/home/FilterMobileMain";

export default {
  name: "PhoneFilter",
  components: {FilterMobileMain, SelectPhone, SelectFilter},
  mixins: [mainFilterMixin],
  data() {
    return {
      phoneInfo: {
        text: 'Теле2 Россия Интернешнл Селлулар БВ Нижегородская область г. Нижний Новгород',
        img: '/img/phones/tele2.svg'
      }
    }
  }
}
</script>

<style lang="scss">
  .phone-info {
    display: flex;
    align-items: center;
    height: 45px;
    width: 470px;
    margin-right: 10px;
    padding-right: 15px;
    padding-left: 10px;
    background-color: #fff;
    @media (max-width: $exlarg) {
      width: 353px;
    }
    @media (max-width: $xl) {
      height: 30px;
      margin-right: 0;
      min-width: calc((100% - 63px) / 2);
      width: calc((100% - 63px) / 2);
    }
    @media (max-width: $lg) {
      height: unset;
      width: 100%;
      margin: 10px 0 0;
    }
    &__img {
      min-width: 59px;
      width: 59px;
      margin-right: 10px;
      @media (max-width: $xl) {
        min-width: 50px;
        width: 50px;
      }
    }
    &__text {
      font-size: 12px;
      line-height: 1;
      color: #5c6266;
      @media (max-width: $xl) {
        font-size: 10px;
        line-height: 1.2;
      }
    }
  }
  .filter {
    &__form {
      .phone-info {
        @media (max-width: $lg) {
          display: none;
        }
      }
    }
    &__mobile {
      .phone-info {
        display: none;
        @media (max-width: $lg) {
          display: flex;
        }
      }
    }
  }
</style>