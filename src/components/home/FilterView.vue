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
        <div class="filter-view__view">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/Pagination";
import GoToPage from "@/components/home/GoToPage";
import CountVacancies from "@/components/home/CountVacancies";
export default {
name: "FilterView",
  components: {CountVacancies, GoToPage, Pagination}
}
</script>

<style lang="scss">
  .filter-view {
    padding: 5px 0 10px;
    &__content {
      display: flex;
    }
  }
  .my-sda {
    position: relative;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #bfbfbf;
    .user-box__icon-num {
      left: 100%;
    }
  }
</style>