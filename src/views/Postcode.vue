<template>
  <div class="postcode">
    <PostcodeFilter/>
    <div class="postFilter__wrap">
      <div class="container">
        <div class="postFilter__content">
          <h2 class="h2">Результат поиска:</h2>
          <div class="postcode__content">
            <div class="postcode__inputs">
              <Input
                  class="input-simple"
                  v-for="(item, key, index) in inputs"
                  :default-value="values[key]"
                  :data="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostcodeFilter from "@/components/filters/PostcodeFilter";
import Input from "@/components/form/Input";
export default {
name: "Postcode",
  components: {Input, PostcodeFilter},
  data() {
    return {
      inputs: {
        index: {
          label: 'Индекс:'
        },
        region: {
          label: 'Регион/область/край:'
        },
        city: {
          label: 'Город:'
        },
        home: {
          label: 'Дом:'
        },
        housing: {
          label: 'Корпус:'
        },
        area: {
          label: 'Район:'
        }
      },
      values: {
        index: '603122',
        region: 'Нижегородская область',
        city: 'г. Нижний Новгород',
        home: '154',
        housing: '3',
        area: 'Приокский'
      }
    }
  }
}
</script>

<style lang="scss">
  .postcode {
    &__content {
      display: flex;
      padding: 39px 15px 34px;
      background-color: #fff;
    }
    &__inputs {
      margin: 0 auto;
      @media (max-width: $md) {
        width: 100%;
      }
    }
    &__filter {
      @media (max-width: $md) {
        display: none;
      }
    }
  }

  .postFilter {
    &__content {
      padding-left: 172px;
      @media (max-width: $exlarg) {
        padding-left: 0;
      }
      .h2 {
        margin-bottom: 14px;
        @media (max-width: $xl) {
          margin-top: 15px;
        }
        @media (max-width: $md) {
          display: none;
        }
      }
    }
    &__wrap {
      margin-bottom: 118px;
      @media (max-width: $exlarg) {
        margin-bottom: 40px;
      }
      @media (max-width: $md) {
        margin-bottom: 0;
        background-color: #fff;
      }
    }
  }
</style>