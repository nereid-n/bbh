<template>
  <div class="description-main" :class="{'description-main__open': full}">
    <div class="container">
      <h2 class="h2">
        Работа в России
      </h2>
      <div class="description-main__text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p class="dm__lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p class="dm__xl dm__lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="link" @click="showMore">
        <span v-if="!full">Показать полностью</span>
        <span v-else>Показать меньше</span>
        <i class="btn__icon icon-angle-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      full: false
    }
  },
  methods: {
    showMore() {
      this.full = !this.full;
    }
  }
}
</script>

<style lang="scss">
.description-main {
  padding-top: 32px;
  padding-bottom: 79px;
  background-color: #fff;
  border-bottom: 1px solid #e9edf0;
  @media (max-width: $xl) {
    padding-top: 26px;
    padding-bottom: 90px;
  }
  @media (max-width: $md) {
    padding-bottom: 36px;
  }
  .h2 {
    margin-bottom: 37px;
    @media (max-width: $md) {
      margin-bottom: 15px;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 25px;
    line-height: 1.41;
    font-size: 17px;
    @media (max-width: $md) {
      margin-bottom: 20px;
    }
  }
  &__text {
    padding-bottom: 30px;
    @media (max-width: $xl) {
      padding-bottom: 12px;
    }
    @media (max-width: $md) {
      padding-bottom: 0;
      p:first-child {
        text-overflow: ellipsis;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  
  .dm {
    &__xl {
      display: none;
    }
    &__lg {
      @media (max-width: $xl) {
        display: none;
      }
    }
  }
  
  &__open {
    .icon-angle-down {
      transform: rotate(180deg);
    }
    .dm__lg,
    .dm__lg {
      display: block;
    }
    p:first-child {
      height: unset;
      overflow: unset;
      text-overflow: unset;
      white-space: unset;
    }
  }
}
</style>