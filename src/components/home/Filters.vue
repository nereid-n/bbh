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
          <div class="filter__top">
            <div class="filter__top-text">
              Поиск:
            </div>
            <div class="filter__top-link">
              по городам
            </div>
            <div class="filter__top-link">
              по рубрикам
            </div>
            <div class="filter__top-link">
              по професиям
            </div>
            <router-link class="filter__top-link" to="/">
              Расширенный поиск
            </router-link>
          </div>
          <div class="filter__form">
            <Select
                :data="mainFilter"
                :defaultValue="0"
                @input="onInput"
            />
            <Input :data="keywords"/>
            <Select :data="region"/>
            <Select :data="area"/>
            <Select :data="metro"/>
            <button class="filter__btn">Найти</button>
          </div>
          <div class="filter__bottom">
            <Checkbox :data="checkboxModer"/>
            <div class="filter__list">
              <div class="filter__list-item">
                <router-link class="filter__list-text" to="/">
                  Резюме
                </router-link>
                <span class="filter__list-num">2307</span>
              </div>
              <div class="filter__list-item">
                <router-link class="filter__list-text" to="/">
                  Вакансии
                </router-link>
                <span class="filter__list-num">1205</span>
              </div>
            </div>
            <div class="filter__save">
              Сохранить поиск
            </div>
          </div>
          <div class="filter__check">
            <div class="filter__check-item">
              Нижний новгород
              <i class="icon icon-cross"></i>
            </div>
            <div class="filter__check-item">
              Отображать вакансии не прошедшие модрацию
              <i class="icon icon-cross"></i>
            </div>
            <div class="filter__check-clear">
              Очистить фильтры
            </div>
          </div>
        </div>
      </div>
      <div class="filter__mobile">
        <div class="filter__mobile-main">
          <div
              v-for="(item, key, index) in mainFilter.options"
              class="filter__mobile-item"
              :class="{'active': key == mainFilter.defaultValue}"
          >
            {{item}}
          </div>
          <div @click="moreOpen = !moreOpen" class="filter__mobile-item">
            Еще
            <div v-if="moreOpen" class="filter__mobile-more">
              <div
                  v-for="(item, index) in mainFilter.options"
                  v-if="index > 2"
                  class="filter__mobile-more-item"
              >
                {{item}}
              </div>
            </div>
          </div>
        </div>
        <Checkbox :data="checkboxModer"/>
        <div class="filter__mobile-menu">
          <router-link
              v-for="item in mobileMenu"
              class="filter__mobile-menu-item"
              :to="item.link"
          >
            <div class="filter__mobile-menu-img">
              <img :src="item.img" :alt="item.title">
            </div>
            <span class="filter__mobile-menu-text">{{item.title}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Input from "@/components/form/Input";
import Checkbox from "@/components/form/Checkbox";
export default {
  name: "Filters",
  components: {Checkbox, Input, Select},
  data() {
    return {
      mainFilter: {
        defaultValue: 0,
        options: {
          0: 'Вакансии + Резюме',
          1: 'Вакансии',
          2: 'Резюме',
          3: 'Телефон',
          4: 'Индекс'
        }
      },
      keywords: {
        placeholder: 'Введите ключевые слова (например юрист)'
      },
      region: {
        placeholder: 'Регион / Населенный пункт'
      },
      area: {
        placeholder: 'Район'
      },
      metro: {
        placeholder: 'Метро'
      },
      checkboxModer: {
        text: 'Отображать вакансии не прошедшие модерацию',
        id: 'moder-no-check'
      },
      mobileMenu: [
        {
          img: '/img/mobile/1.jpg',
          link: '/',
          title: 'Разместить Резюме'
        },
        {
          img: '/img/mobile/2.jpg',
          link: '/',
          title: 'Разместить Вакансию'
        },
        {
          img: '/img/mobile/3.jpg',
          link: '/',
          title: 'Оформить Подписку'
        }
      ],
      moreOpen: false
    }
  },
  methods: {
    onInput(value) {}
  }
}
</script>

<style lang="scss">
  .filter {
    padding: 19px 0;
    @media (max-width: $xl) {
      padding: 0;
      background-color: #fff;
    }
    @media (max-width: $md) {
      padding-bottom: 5px;
    }
    &__content {
      display: flex;
    }
    &__main {
      flex-grow: 1;
      padding-left: 10px;
      @media (max-width: $xl) {
        padding-left: 0;
      }
    }
    &__top {
      display: flex;
      font-size: 15px;
      font-weight: 300;
      @media (max-width: $xl) {
        display: none;
      }
      &-text {
        margin-right: 28px;
        color: #3d3d3d;
      }
      &-link {
        margin-right: 25px;
        color: #5c6266;
        border-bottom: 1px solid #bfbfbf;
        &:last-child {
          margin-right: 0;
          margin-left: auto;
        }
      }
    }
    &__form {
      display: flex;
      margin-top: 8px;
      padding: 11px 10px 10px;
      background-color: $primary;
      @media (max-width: $xl) {
        margin-top: 0;
        padding: 2px;
      }
      .select-wrap,
      .input-wrap {
        flex-grow: 1;
        margin-right: 9px;
        @media (max-width: $xl) {
          margin-right: 0;
        }
        @media (max-width: $md) {
          .input__placeholder {
            display: none;
          }
        }
      }
      .select-wrap {
        @media (max-width: $xl) {
          display: none;
        }
      }
    }
    &__bottom {
      display: flex;
      padding: 12px 0;
      @media (max-width: $xl) {
        display: none;
      }
    }
    &__check {
      display: flex;
      align-items: center;
      @media (max-width: $xl) {
        display: none;
      }
      &-item {
        display: flex;
        align-items: center;
        padding: 3px 10px;
        margin-right: 7px;
        color: #706f6f;
        font-size: 12px;
        border-radius: 2px;
        background-color: #e0e2e5;
        i {
          margin-left: 9px;
          font-size: 10px;
          cursor: pointer;
        }
      }
      &-clear {
        margin-left: 7px;
        color: #3568b4;
        font-size: 14px;
        font-weight: 300;
        border-bottom: 1px dotted #3568b4;
      }
    }
    &__btn {
      padding: 0 4px;
      color: #fff;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      @media (max-width: $xl) {
        padding: 0 9px;
        font-size: 13px;
      }
      @media (max-width: $md) {
        padding: 0 5px;
      }
    }
    &__list {
      display: flex;
      margin-left: auto;
      &-item {
        margin-left: 48px;
        font-size: 14px;
      }
      &-text {
        color: $primary;
      }
      &-num {
        color: $placeholder;
      }
    }
    &__save {
      margin-left: 49px;
      color: $placeholder;
      font-size: 14px;
    }
    &__logo {
      @media (max-width: $xl) {
        display: none;
      }
    }
    &__mobile {
      display: none;
      @media (max-width: $xl) {
        display: block;
      }
      &-main {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d8d8d8;
      }
      &-item {
        position: relative;
        display: flex;
        align-items: center;
        height: 39px;
        padding: 0 5px;
        font-size: 10px;
        text-transform: uppercase;
        color: #3f3f40;
        &:nth-child(6) {
          display: none;
          @media (max-width: $md) {
            display: flex;
          }
        }
        &:nth-child(4),
        &:nth-child(5) {
          @media (max-width: $md) {
            display: none;
          }
        }
        &.active {
          color: #ff2e20;
          border-bottom: 2px solid #ff2e20;
        }
      }
      .checkbox-wrap {
        margin-top: 9px;
        @media (max-width: $md) {
          margin-top: 11px;
        }
      }
      &-menu {
        display: flex;
        justify-content: space-between;
        margin-top: 9px;
        @media (max-width: $md) {
          display: none;
        }
        &-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 193px;
          text-align: center;
        }
        &-img {
          height: 97px;
          margin-bottom: 16px;
          border: 1px solid #e8e8e8;
          border-radius: 2px;
        }
        &-text {
          font-size: 14px;
          line-height: 12px;
          color: #3f3f40;
        }
      }
      &-more {
        position: absolute;
        z-index: 10;
        top: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #d8d8d8;
        border-radius: 2px;
        &-item {
          margin: 5px 0;
        }
      }
    }
  }
</style>