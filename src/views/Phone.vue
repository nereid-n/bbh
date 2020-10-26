<template>
  <div class="phone">
    <PhoneFilter/>
    <div class="postFilter__wrap">
      <div class="container">
        <div class="postFilter__content">
          <h2 class="h2">Результат поиска:</h2>
          <div class="cards">
            <Card
                v-for="card in cards"
                :data="card"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneFilter from "@/components/filters/PhoneFilter";
import Card from "@/components/Card";
export default {
name: "Phone",
  components: {Card, PhoneFilter},
  data() {
    return {
      cards: []
    }
  },
  methods: {
    getPhones() {
      this.$store.dispatch('phones/GET_PHONES')
        .then(res => {
          this.cards = res;
        });
    }
  },
  created() {
    this.getPhones();
    document.title = 'Телефон';
  }
}
</script>

<style lang="scss">
  .postFilter {
    &__wrap {
      .cards {
        @media (max-width: $exlarg) {
          padding-left: 173px;
        }
        @media (max-width: $xl) {
          padding-left: 0;
        }
      }
    }
  }
</style>