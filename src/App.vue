<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  svg {width: 100%; height: auto;}

</style>

<style lang="scss" scoped>
  @import "./main";

  #app {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    @include make-font-body();
  }
</style>
