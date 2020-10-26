<template>
  <div class="select__dropdown">
    <div class="select__country select__dropdown-long">
      <vuescroll>
        <div
            v-for="(value, key, index) in countries"
            @click="getItems('regions')"
            class="select__dropdown-item"
        >
          <div class="select__dropdown-item-content">
            {{value}}
          </div>
        </div>
      </vuescroll>
      <vuescroll>
        <div
            v-for="(value, key, index) in regions"
            @click="getItems('locality')"
            class="select__dropdown-item"
        >
          <div class="select__dropdown-item-content">
            {{value}}
          </div>
        </div>
      </vuescroll>
      <vuescroll>
        <div
            v-for="(value, key, index) in locality"
            class="select__dropdown-item"
            @click="clickItem(key, value)"
        >
          <div class="select__dropdown-item-content">
            {{value}}
          </div>
        </div>
      </vuescroll>
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll';
export default {
  name: "CountrySelect",
  components: {vuescroll},
  data() {
    return {
      countries: {},
      regions: {},
      locality: {}
    }
  },
  methods: {
    getItems(place) {
      this.$store.dispatch(`places/GET_${place.toUpperCase()}`)
          .then(res => {
            this[place] = res;
          });
    },
    clickItem(key, value) {
      this.$emit('clickItem', key, value);
    }
  },
  created() {
    this.getItems('countries');
  }
}
</script>

<style lang="scss">
  .select__country {
    display: flex;
    padding: 15px 0;
    .__vuescroll {
      min-width: 200px;
    }
    .select__dropdown-item {
      white-space: unset;
      &:hover {
        color: $primary;
        background-color: #fff;
      }
    }
    .select__dropdown-item-content {
      padding: 3px 15px;
    }
  }
</style>