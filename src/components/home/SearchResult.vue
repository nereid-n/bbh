<template>
  <div class="search-result">
    <div class="sorting">
      <Select
          :data="period"
          :default-value="values.period"
          class="select-link"
      />
      <Select
          :data="typeSorting"
          :default-value="values.typeSorting"
          class="select-link"
      />
      <div class="sorting__map">
        <i class="btn__icon icon-map-marked"></i>
      </div>
      <Select
          :data="admin"
          :default-value="values.admin"
          class="select-link"
      />
      <Select
          :data="actual"
          :default-value="values.actual"
          class="select-link"
      />
    </div>
    <div class="cards">
      <Card
          v-for="card in cards"
          :data="card"
      />
    </div>
    <div class="search__view">
      <Pagination
        :pages="10"
        :activePage="1"
      />
      <GoToPage class="search__view-goToPage"/>
      <CountVacancies class="search__view-countVacancies"/>
      <ViewResult class="search__view-viewResult"/>
    </div>
  </div>
</template>

<script>
import Select from "@/components/form/Select";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import GoToPage from "@/components/home/GoToPage";
import CountVacancies from "@/components/home/CountVacancies";
import ViewResult from "@/components/home/ViewResult";
export default {
  name: "SearchResult",
  components: {ViewResult, CountVacancies, GoToPage, Pagination, Card, Select},
  data() {
    return {
      values: {
        period: 0,
        typeSorting: 0,
        admin: 0,
        actual: 0
      },
      period: {
        name: 'period',
        options: {
          0: 'За весь период',
          1: 'С последнего посещения',
          2: 'За последние сутки',
          3: 'За последние 3 дня',
          4: 'За последнюю неделю',
          5: 'За последние 2 недели',
          6: 'За последний месяц',
        }
      },
      typeSorting: {
        name: 'typeSorting',
        options: {
          0: 'По соответствию',
          1: 'По дате',
          2: 'По убыванию зарплаты',
          3: 'По возрастанию зарплаты',
          4: 'По номеру домов "только нечётные"',
          5: 'По номеру домов "только чётные"',
          6: 'Номера домов по возрастанию',
          7: 'Номера домов по убыванию',
        }
      },
      admin: {
        name: 'admin',
        options: {
          0: 'Администратор',
          1: 'Все',
          2: 'Мои',
          3: 'Полушкина',
          4: 'Матвеева',
        }
      },
      actual: {
        name: 'actual',
        options: {
          0: 'По актуальным',
          1: 'По всем',
          2: 'По архивным'
        }
      },
    }
  },
  props: {
    cards: {
      type: Array
    }
  },
}
</script>

<style lang="scss">
  .search-result {
    width: calc(100% - 460px);
    margin-top: 16px;
    padding-top: 15px;
    border-top: 1px solid #fff;
    @media (max-width: $exlarg) {
      width: calc(100% - 300px);
    }
    @media (max-width: $xl) {
      width: 100%;
      margin-top: 0;
      border-top: none;
    }
    @media (max-width: $lg) {
      padding-top: 5px;
    }
  }
  .sorting {
    position: relative;
    display: flex;
    justify-content: space-between;
    @media (max-width: $md) {
      flex-wrap: wrap;
      justify-content: flex-start;
      .select-wrap {
        margin-right: 12px;
      }
    }
    &__map {
      color: $links;
      font-size: 25px;
      @media (max-width: $md) {
        position: absolute;
        right: -3px;
        bottom: 5px;
        font-size: 23px;
      }
    }
    .input {
      @media (max-width: $lg) {
        min-width: unset;
      }
    }
  }
  .cards {
    margin-top: 10px;
    @media (max-width: $lg) {
      margin-top: 15px;
    }
    @media (max-width: $md) {
      margin-left: -15px;
      margin-right: -15px;
      background-color: #f5f7f9;
    }
  }
  .search__view {
    display: flex;
    align-items: center;
    margin-top: 34px;
    @media (max-width: $md) {
      margin-top: 15px;
      margin-bottom: 27px;
    }
    .pagination {
      margin-right: auto;
    }
    .viewForm {
      margin-left: 46px;
      @media (max-width: $exlarg) {
        margin-left: 15px;
      }
      &__text {
        @media (max-width: $exlarg) {
          margin-right: 10px;
        }
      }
    }
    &-viewResult,
    &-countVacancies {
      @media (max-width: $xl) {
        display: none;
      }
    }
    &-goToPage {
      @media (max-width: $md) {
        display: none;
      }
    }
  }
</style>