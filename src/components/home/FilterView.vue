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
        <div class="viewForm">
          <div class="viewForm__text">
            Вид:
          </div>
          <Select
              class="viewForm__input"
              :data="view"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/Pagination";
import GoToPage from "@/components/home/GoToPage";
import CountVacancies from "@/components/home/CountVacancies";
import Select from "@/components/form/Select";
export default {
  name: "FilterView",
  components: {Select, CountVacancies, GoToPage, Pagination},
  data() {
    return {
      view: {
        defaultValue: 0,
        options: [
          {
            key: 0,
            value: '<div class="viewRows"><span></span><span></span><span></span></div>'
          }
        ]
      }
    }
  }
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
  .viewRows {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12px;
    height: 9px;
    margin-left: -2px;
    span {
      width: 100%;
      height: 1px;
      background-color: #72797e;
    }
  }
</style>