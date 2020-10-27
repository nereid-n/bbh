<template>
  <Modal
      class="select__country-wrap"
      @closeModal="closeModal"
  >
    <div class="select__country-column">
      <div class="select__country-title">
        Страна:
      </div>
      <div class="select__country-items">
        <vuescroll>
          <div
              v-for="(value, key, index) in countries"
              @click="getCountries(key)"
              :key="`country${key}`"
              class="select__dropdown-item"
              :class="{'active': key === activeCountry}"
          >
            <div class="select__dropdown-item-content">
              {{value}}
            </div>
          </div>
        </vuescroll>
      </div>
    </div>
    <div class="select__country-column">
      <div class="select__country-title">
        <span>Регион:</span>
        <span @click="regionsClearClick" class="select__country-clear">Очистить</span>
      </div>
      <div class="select__country-items">
        <vuescroll>
          <div>
            <div class="select__dropdown-item select__country-main-checkbox select__country-main-checkbox-last">
              <div class="select__dropdown-item-content">
                <Checkbox
                    :data="{text: 'Все регионы', name: 'allRegions', id: 'allRegions'}"
                    :clear="regionsClear"
                    @onInput="checkAllRegions"
                />
              </div>
            </div>
            <div
                v-for="(value, key, index) in regions"
                class="select__dropdown-item"
            >
              <div class="select__dropdown-item-content">
                <Checkbox
                    @onInput="checkRegion"
                    :checked="allRegions"
                    :clear="regionsClear"
                    :data="{text: value, name: 'regions', id: `region${key}`}"
                />
              </div>
            </div>
          </div>
        </vuescroll>
      </div>
    </div>
    <div class="select__country-column">
      <div class="select__country-title">
        <span>Населённый пункт:</span>
        <span @click="localitiesClearClick" class="select__country-clear">Очистить</span>
      </div>
      <div class="select__country-items">
        <vuescroll>
          <div>
            <div class="select__dropdown-item select__country-main-checkbox">
              <div class="select__dropdown-item-content">
                <Checkbox
                    :data="{text: 'Все населённые пункты', name: 'allLocalities', id: 'allLocalities'}"
                    :clear="localitiesClear"
                    :checked="allLocality"
                    @onInput="checkAllLocalities"
                />
              </div>
            </div>
            <div
                v-if="locality.length > 0"
                class="select__dropdown-item select__country-main-checkbox select__country-main-checkbox-last">
              <div
                  v-for="(item, index) in locality"
                  class="select__dropdown-item-content">
                <Checkbox
                    :data="{text: item.mainCity, name: 'locality', id: `mainLocality${index}`}"
                    :checked="allLocality"
                    :clear="localitiesClear"
                    @onInput="checkLocality"
                />
              </div>
            </div>
            <div class="select__dropdown-locality" v-for="(item, indexMain) in locality">
              <div class="select__dropdown-item">
                <div class="select__dropdown-item-content">
                  <Checkbox
                      @onInput="checkLocalityRegion"
                      :checked="allLocality"
                      :clear="localitiesClear"
                      :data="{text: item.region, name: 'localityRegion', id: `localityRegion${indexMain}`}"
                      :key="`localityRegion${indexMain}`"
                  />
                </div>
              </div>
              <div
                  v-for="(value, key, index) in item.list"
                  class="select__dropdown-item"
              >
                <div class="select__dropdown-item-content">
                  <Checkbox
                      @onInput="checkLocality"
                      :checked="allLocality || checkLocalityRegionAll(indexMain)"
                      :clear="localitiesClear"
                      :data="{text: value, name: 'locality', id: `locality${key}`}"
                      :key="`locality${key}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </vuescroll>
      </div>
    </div>
  </Modal>
</template>

<script>
import vuescroll from 'vuescroll';
import Modal from "@/components/Modal";
import Checkbox from "@/components/form/Checkbox";
export default {
  name: "CountrySelect",
  components: {Checkbox, Modal, vuescroll},
  data() {
    return {
      countries: {},
      activeCountry: '',
      regions: {},
      locality: [],
      allRegions: false,
      allLocality: false,
      localityRegion: [],
      regionsClear: false,
      localitiesClear: false,
      value: []
    }
  },
  methods: {
    getCountries(country) {
      this.regions = [];
      this.activeCountry = country;
      this.$store.dispatch(`places/GET_REGIONS`)
          .then(res => {
            this.regions = res;
          });
    },
    getLocality(region) {
      this.$store.dispatch(`places/GET_LOCALITY`)
          .then(res => {
            this.locality.push({
              region: region,
              list: res.list,
              mainCity: res.mainCity
            });
          });
    },
    clickItem(key, value) {
      this.$emit('clickItem', key, value);
    },
    checkAllRegions(value) {
      this.allRegions = value.value;
    },
    checkAllLocalities(value) {
      this.allLocality = value.value
    },
    checkRegion(value) {
      if (value.value) {
        this.getLocality(value.text);
        this.$nextTick(() => {
          this.allLocality = true;
        });
      } else {
        for (let i = 0; i < this.locality.length; i++) {
          if (this.locality[i].region === value.text) {
            this.locality.splice(i, 1);
          }
        }
        if (this.locality.length === 0) {
          this.allLocality = false;
        }
      }
    },
    checkLocalityRegion(value) {
      for (let i = 0; i < this.locality.length; i++) {
        if (value.text === this.locality[i].region) {
          if (value.value) {
            this.localityRegion.push(i);
            break;
          } else {
            for (let j = 0; j < this.localityRegion.length; j++) {
              if (this.localityRegion[j] === i) {
                this.localityRegion.splice(j, 1);
                break;
              }
            }
            break;
          }
        }
      }
    },
    checkLocalityRegionAll(index) {
      for (let i = 0; i < this.localityRegion.length; i++) {
        if (this.localityRegion[i] === index) {
          return true;
        }
      }
      return false;
    },
    regionsClearClick() {
      this.regionsClear = true;
      this.allLocality = false;
      setTimeout(() => {
        this.regionsClear = false;
      }, 300);
    },
    localitiesClearClick() {
      this.localitiesClear = true;
      setTimeout(() => {
        this.localitiesClear = false;
      }, 300);
    },
    checkLocality(value) {
      if (value.value) {
        this.value.push(value.text);
      } else {
        for (let i = 0; i < this.value.length; i++) {
          if (this.value[i] === value.text) {
            this.value.splice(i, 1);
            break
          }
        }
      }
    },
    closeModal() {
      this.$emit('clickItem', this.value);
      this.$emit('close');
    }
  },
  created() {
    this.$store.dispatch(`places/GET_COUNTRIES`)
        .then(res => {
          this.countries = res;
        });
  }
}
</script>

<style lang="scss">
  .input-active {
    .select__country-wrap {
      display: flex;
    }
  }
  .select__country {
    position: unset;
    min-width: 181px;
    &-wrap {
      display: none;
      .modal__content {
        position: relative;
        padding: 40px;
        display: flex;
        background-color: #fff;
      }
    }
    &-items {
      height: 350px;
      padding-bottom: 15px;
      border: 1px solid #e2e2e2;
    }
    &-column {
      min-width: 200px;
      margin-left: 15px;
      &:first-child {
        margin-left: 0;
        .select__country-items {
          padding: 15px 0;
        }
      }
    }
    &-title {
      display: flex;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .select__dropdown-item {
      white-space: unset;
      &:hover {
        color: $primary;
        background-color: #fff;
      }
      &.active {
        color: $primary;
      }
    }
    .select__dropdown-item-content {
      padding: 3px 15px;
    }
    &-main-checkbox {
      padding: 5px 0;
      border-bottom: 1px solid #e2e2e2;
      &-last {
        margin-bottom: 5px;
      }
    }
    &-clear {
      margin-left: auto;
      font-weight: 400;
      color: $primary;
      cursor: pointer;
      &:hover {
        color: $placeholder;
      }
    }
  }
  .select__dropdown {
    &-locality {
      .select__dropdown-item {
        .select__dropdown-item-content {
          padding-left: 40px;
        }
        &:first-of-type {
          .select__dropdown-item-content {
            font-weight: 700;
            padding-left: 15px;
          }
        }
      }
    }
  }
</style>