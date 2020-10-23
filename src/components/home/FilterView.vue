<template>
  <div class="filter-view">
    <div class="container">
      <div class="filter-view__content">
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
    &__content {
      display: flex;
      align-items: center;
    }
    .pagination {
      margin: 0 auto;
      padding-left: 117px;
      @media (max-width: 1540px) {
        padding-left: 30px;
      }
    }
    .viewForm {
      margin-left: 44px;
      @media (max-width: 1540px) {
        margin-left: 25px;
      }
    }
  }
  .my-sda {
    position: relative;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #bfbfbf;
    .user-box__icon-num {
      top: -9px;
      left: calc(100% + 4px);
    }
  }
</style>