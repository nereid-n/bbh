<template>
  <div class="mobile-companies">
    <div class="container">
      <h2 class="h2">Работа в компаниях</h2>
      <div class="mobile-companies__items">
        <div
            v-for="item in companies"
            class="mobile-companies__item"
        >
          <router-link to="/" class="mobile-companies__title">
            {{item.title}}
          </router-link>
          <div class="mobile-companies__company">
            {{item.company}}
          </div>
        </div>
      </div>
      <router-link to="/" class="link">Смотреть полностью</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileCompanies",
  data() {
    return {
      companies: [
        {
          title: 'Командир воздушных судов',
          company: 'Аэрофлот'
        },
        {
          title: 'R&D (Research & Development) Man',
          company: 'Acceptic LTD'
        },
        {
          title: 'Командир воздушных судов',
          company: 'Аэрофлот'
        },
        {
          title: 'R&D (Research & Development) Man',
          company: 'Acceptic LTD'
        },
        {
          title: 'Командир воздушных судов',
          company: 'Аэрофлот'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .mobile-companies {
    display: none;
    padding: 20px 0 16px;
    @media (max-width: $md) {
      display: block;
    }
    .h2 {
      margin-bottom: 20px;
    }
    &__items {
      margin-bottom: 10px;
    }
    &__item {
      padding: 8px 0;
      border-bottom: 1px solid #e8e8e8;
      &:last-of-type {
        border-bottom: none;
      }
    }
    &__title {
      display: block;
      margin-bottom: 2px;
      color: #3568b4;
    }
    &__company {
      font-size: 13px;
    }
  }
</style>