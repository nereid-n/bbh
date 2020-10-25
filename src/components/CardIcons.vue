<template>
  <div class="card__icons">
    <i class="icon-envelope-m"></i>
    <Favorite :favorite="favorite"/>
    <i class="icon-cross"></i>
  </div>
</template>

<script>
import Favorite from "@/components/Favorite";
export default {
name: "CardIcons",
  components: {Favorite},
  props: {
    favorite: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
  .card__icons {
    color: #c0c0c0;
    font-size: 16px;
    i {
      margin-left: 13px;
      cursor: pointer;
      &:hover {
        color: $primary;
      }
      @media (max-width: $md) {
        margin-left: 8px;
      }
    }
    .icon-star-alt {
      font-size: 18px;
      &.active {
        &:before {
          color: #f6534f;
          content: '\e912' !important;
        }
      }
    }
  }
</style>