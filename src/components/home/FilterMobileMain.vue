<template>
  <div class="filter__mobile-main">
    <div
        v-for="(item, key, index) in mainFilter.options"
        class="filter__mobile-item"
        :class="{'active': key == active}"
    >
      {{item}}
    </div>
    <div @click="moreOpen = !moreOpen" class="filter__mobile-item">
      Еще
      <div v-if="moreOpen" class="filter__mobile-more">
        <router-link
            v-for="(item, index) in mainFilter.options"
            v-if="index > 2"
            :to="item.link"
            class="filter__mobile-more-item"
        >
          {{item.text}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import mainFilterMixin from "@/assets/mixins/mainFilterMixin";

export default {
  name: "FilterMobileMain",
  props: {
    active: {}
  },
  mixins: [mainFilterMixin]
}
</script>

<style scoped>

</style>