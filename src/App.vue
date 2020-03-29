<template>
  <div id="app">
    <div class="left-side">

    </div>
    <div class="right-side">

    </div>
<!--    <nav id="nav">>-->
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--      <router-view/>-->

<!--     <div class="d-flex">-->
<!--        <div class="kamil">-->
<!--          <user-avatar src="img/assets/user.kamil.jpg"></user-avatar>-->
<!--          <p>-->
<!--            Kamil-->
<!--          </p>-->

<!--        </div>-->
<!--      </div>-->

<!--      <div class="juras">-->
<!--        <div class="pic">-->
<!--          <user-avatar src="img/user.juras.jpg">-->
<!--          </user-avatar>-->
<!--           </div>-->
<!--        <p>-->
<!--          juras-->
<!--        </p>-->
<!--      </div>-->
      <div class="soon">

        <p>soon.</p>
        <small><a href="mailto:me@kamil-jurowicz.com">me@kamil-jurowicz.com</a></small>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');
 @import "./main.scss";


  .soon {
    width: 100%;
    max-width: 400px;
    .d-flex {
      display: flex;
      justify-content: space-around;
    }
    .row {
      display: flex;
      align-items: center;

    }
    .pic {
      width: 150px;
    }
  }

  .left-side {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    z-index: -1;
    &:hover {

    }
  }
  .right-side {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    z-index: -1;
    &:hover {
      background-color: #fff;
    }
  }

  #app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    text-align: center;
    color: #fff;
    max-width: 900px;
    margin: 0 auto;
    @include make-font-body();
    display: flex;
    justify-content: center;
    align-items: center;
  }


  $border-radius-1: 25px;

  #nav {
    padding: 30px;
    a {
      @include make-primary-button();
    }
  }
</style>
