<template>
  <div class="home home-first">
    <MainTitle/>
    <MobileFind/>
    <MobilePopular/>
    <Filters @changeFilter="getItems"/>
    <FilterView/>
    <Icons/>
    <div class="container home-main-content">
      <FilterAside/>
      <SearchResult :cards="cards"/>
    </div>
    <Companies/>
    <TopList/>
    <WorkCity/>
    <MobileCompanies/>
    <Articles/>
    <Description/>
  </div>
</template>

<script>
import MainTitle from "../components/MainTitle";
import Filters from "../components/filters/Filters";
import FilterView from "@/components/filters/FilterView";
import Icons from "@/components/home/Icons";
import FilterAside from "@/components/filters/FilterAside";
import SearchResult from "@/components/home/SearchResult";
import Companies from "@/components/home/Companies";
import TopList from "@/components/home/TopList";
import Articles from "@/components/home/Articles";
import Description from "@/components/home/Description";
import WorkCity from "@/components/home/WorkCity";
import MobileFind from "@/components/home/mobile/MobileFind";
import MobilePopular from "@/components/home/mobile/MobilePopular";
import MobileCompanies from "@/components/home/mobile/MobileCompanies";

export default {
  name: 'Home',
  components: {
    MobileCompanies,
    MobilePopular,
    MobileFind,
    WorkCity,
    Description,
    Articles,
    TopList,
    Companies,
    SearchResult,
    FilterAside,
    Icons,
    FilterView,
    Filters,
    MainTitle
  },
  data() {
    return {
      cards: []
    }
  },
  methods: {
    getItems(value) {
      this.$store.dispatch(`vacancies/GET_${value.value.toUpperCase()}`)
          .then(res => {
            this.cards = res;
          });
    }
  },
  created() {
    this.getItems({value: this.$route.params.type});
  }
}
</script>

<style lang="scss">
  .home-main-content {
    display: flex;
    justify-content: space-between;
  }
  .home {
    @media (max-width: $md) {
      background-color: #fff;
    }
  }
  @media (max-width: $md) {
    .home {
      &-first {
        .filter,
        .filter-view,
        .home-main-content {
          display: none !important;
        }
      }
      &-second {
        .mobile-find,
        .mobile-popular,
        .work-city,
        .mobile-companies,
        .description-main {
          display: none !important;
        }
      }
    }
  }
</style>