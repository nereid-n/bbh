<template>
  <div class="filter__mobile-main">
    <div
        v-for="(item, key, index) in mainFilter.options"
        class="filter__mobile-item"
        :class="{'active': key == active}"
        @click="onMainSelect({name: 'type', value: key})"
    >
      <template v-if="typeof item === 'string'">
        {{item}}
      </template>
      <router-link :to="item.link" v-else>
        {{item.value}}
      </router-link>
    </div>
    <div @click="moreOpen = !moreOpen" class="filter__mobile-item">
      Еще
      <div v-if="moreOpen" class="filter__mobile-more">
        <router-link
            :to="mainFilter.options.phone.link"
            class="filter__mobile-more-item"
        >
          {{mainFilter.options.phone.value}}
        </router-link>
        <router-link
            :to="mainFilter.options.postcode.link"
            class="filter__mobile-more-item"
        >
          {{mainFilter.options.postcode.value}}
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
  mixins: [mainFilterMixin],
  methods: {
    closeDropdown(e) {
      if (e.target.closest('.filter__mobile-main') === null) {
        this.moreOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', (e) => this.closeDropdown(e));
  },
}
</script>

<style scoped>

</style>