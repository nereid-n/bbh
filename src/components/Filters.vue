<template>
  <div class="filter">
    <div class="container">
      <div class="filter__content">
        <router-link to="/" class="logo">
          <img src="/img/logo.png" alt="">
        </router-link>
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
            <Select :data="mainFilter"/>
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
        options: [
          {
            key: 0,
            value: 'Вакансии + Резюме'
          }
        ]
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
      }
    }
  }
}
</script>

<style lang="scss">
  .filter {
    padding: 19px 0;
    &__content {
      display: flex;
    }
    &__main {
      flex-grow: 1;
      padding-left: 10px;
    }
    &__top {
      display: flex;
      font-size: 15px;
      font-weight: 300;
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
      .select-wrap,
      .input-wrap {
        flex-grow: 1;
        margin-right: 9px;
      }
    }
    &__bottom {
      display: flex;
      padding: 12px 0;
    }
    &__check {
      display: flex;
      align-items: center;
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
      color: #fff;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
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
  }
</style>