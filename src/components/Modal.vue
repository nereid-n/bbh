<template>
  <div class="modal">
    <div @click="$emit('closeModal')" class="modal__layout"></div>
    <div class="modal__content">
      <slot/>
      <button @click="$emit('closeModal')" class="modal__close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
name: "Modal"
}
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    &__layout {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparentize(#1e1e1e, 0.1);
    }
    &__content {
      position: relative;
    }
    &__close {
      position: absolute;
      top: 0;
      right: 0;
      width: 34px;
      height: 34px;
      padding: 0;
      background-color: transparent;
      border: none;
      svg {
        width: 20px;
      }
    }
  }
</style>