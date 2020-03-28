<template>
  <div id="app">
    <nav id="nav">>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');
 @import "./main.scss";


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: $color-background-dark-2;
    max-width: 900px;
    margin: 0 auto;
    @include make-font-body()
  }

  $border-radius-1: 25px;

  #nav {
    padding: 30px;
    a {
      @include make-primary-button();
    }
  }
</style>
