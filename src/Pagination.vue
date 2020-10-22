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
  }
</style>