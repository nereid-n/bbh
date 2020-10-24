<template>
  <div class="pagination">
    <router-link :class="`pagination__item ${activePage === 1 ? 'disable' : ''}`" to="/">
      <i class="icon-angle-left"></i>
    </router-link>
    <router-link
        v-for="n in pages"
        to="/"
        :class="`pagination__item ${activePage === n ? 'active' : ''}`"
    >
      {{n}}
    </router-link>
    <router-link :class="`pagination__item ${activePage === pages ? 'disable' : ''}`" to="/">
      <i class="icon-angle-right"></i>
    </router-link>
    <router-link to="/" class="pagination__btn btn btn-primary">
      <span class="pagination__btn-text">Страница</span>
      <span class="pagination__btn-current">{{activePage}}</span>
      <span class="pagination__btn-slash">/</span>
      <span class="pagination__btn-pages">{{pages}}</span>
      <i class="icon-angle-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Number
    },
    activePage: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    @media (max-width: $md) {
      width: 100%;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      margin-right: 9px;
      color: #72797e;
      font-size: 14px;
      border-radius: 2px;
      border: solid 1px #72797e;
      @media (max-width: $xl) {
        width: 22px;
        height: 22px;
        font-size: 12px;
      }
      @media (max-width: $md) {
        display: none;
      }
      &:last-child {
        margin-right: 0;
      }
      &:last-child,
      &:first-child {
        font-size: 20px;
      }
      &.disable {
        color: $placeholder;
        border-color: $placeholder;
        pointer-events: none;
      }
      &.active {
        color: #fff;
        background-color: #72797e;
        pointer-events: none;
      }
    }
    &__btn {
      position: relative;
      display: none;
      width: 100%;
      text-transform: none;
      @media (max-width: $md) {
        display: block;
      }
      &-current,
      &-pages {
        margin: 0 5px;
      }
      &-slash,
      &-pages {
        color: #ff7172;
      }
      i {
        position: absolute;
        top: 8px;
        right: 12px;
        font-size: 20px;
      }
    }
  }
</style>