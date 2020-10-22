<template>
  <div class="main-title">
    <div class="container">
      <h1 class="h1">
        Поиск вакансий и кандидатов
      </h1>
      <router-link class="main-title__link" to="/">
        Главная
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MainTitle',
    components: {},
  }
</script>

<style lang="scss">
  .h1 {
    margin: 0 0 2px;
    color: $grayText;
    font-size: 18px;
    font-weight: 400;
  }
  .main-title {
    padding: 13px 0 9px;
    border-top: 1px solid #f5f7f9;
    background-color: #fff;
    &__link {
      color: $primary;
      font-size: 14px;
      font-weight: 300;
    }
  }
</style>
