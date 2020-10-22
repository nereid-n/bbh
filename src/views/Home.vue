<template>
  <div>
    <MainTitle/>
    <Filters/>
    <FilterView/>
    <Icons/>
    <div class="container">
      <div class="home-main-content">
        <FilterAside/>
        <SearchResult/>
      </div>
    </div>
    <Companies/>
    <TopList/>
    <Articles/>
    <Description/>
  </div>
</template>

<script>
import MainTitle from "../components/MainTitle";
import Filters from "../components/Filters";
import FilterView from "@/components/home/FilterView";
import Icons from "@/components/home/Icons";
import FilterAside from "@/components/home/FilterAside";
import SearchResult from "@/components/home/SearchResult";
import Companies from "@/components/home/Companies";
import TopList from "@/components/home/TopList";
import Articles from "@/components/home/Articles";
import Description from "@/components/home/Description";

export default {
  name: 'Home',
  components: {
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
  }
}
</script>
