<template>
  <div class="filter-view">
    <div class="container">
      <div class="filter-view__content">
        <router-link to="/" class="advanced-btn btn btn-primary">
          Расширенный поиск
        </router-link>
        <div class="my-sda">
          Показать мои объявления
          <span class="user-box__icon-num">2</span>
        </div>
        <Pagination
            :pages="6"
            :activePage="1"
        />
        <GoToPage/>
        <CountVacancies/>
        <ViewResult/>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/Pagination";
import GoToPage from "@/components/home/GoToPage";
import CountVacancies from "@/components/home/CountVacancies";
import ViewResult from "@/components/home/ViewResult";
export default {
  name: "FilterView",
  components: {ViewResult, CountVacancies, GoToPage, Pagination},
}
</script>

<style lang="scss">
  .filter-view {
    padding: 5px 0 33px;
    @media (max-width: $xl) {
      padding-top: 23px;
      padding-bottom: 10px;
      background-color: #fff;
    }
    @media (max-width: $md) {
      padding-top: 10px;
    }
    &__content {
      display: flex;
      align-items: center;
      @media (max-width: $md) {
        flex-direction: column;
      }
    }
    .pagination {
      margin: 0 auto;
      padding-left: 117px;
      @media (max-width: $exlarg) {
        padding-left: 30px;
      }
      @media (max-width: $xl) {
        margin: 0;
        padding-left: 0;
      }
    }
    .viewForm {
      margin-left: 44px;
      @media (max-width: $exlarg) {
        margin-left: 25px;
      }
      @media (max-width: $xl) {
        display: none;
      }
    }
  }
  .advanced-btn {
    display: none;
    @media (max-width: $xl) {
      display: block;
    }
    @media (max-width: $md) {
      width: 100%;
      margin-bottom: 14px;
      color: $primary;
      border: 1px solid;
      background-color: transparent;
    }
  }
  .my-sda {
    position: relative;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #bfbfbf;
    @media (max-width: $xl) {
      margin: 0 auto;
      font-size: 13px;
    }
    @media (max-width: $md) {
      display: none;
    }
    .user-box__icon-num {
      top: -9px;
      left: calc(100% + 4px);
    }
  }
</style>