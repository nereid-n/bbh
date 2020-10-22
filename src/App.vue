<template>
  <div id="app">
    <div class="root">
      <Header/>
      <main class="main">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from "./components/layout/Header";

  export default {
    name: 'App',
    components: {
      Header
    },
  }
</script>

<style lang="scss">
  @import "assets/style/icomoon.scss";
  @import "assets/style/container";
  @import "assets/style/buttons";

  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/roboto/Roboto-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/roboto/Roboto-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/roboto/Roboto-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('assets/fonts/roboto/Roboto-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: $main;
    background-color: #f5f7f9;
  }

  a {
    text-decoration: none;
  }

  button {
    font: inherit;
  }

  a, button {
    &:hover {
      cursor: pointer;
    }
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  .h2 {
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
</style>
