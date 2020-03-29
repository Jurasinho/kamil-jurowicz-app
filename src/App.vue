<template>
  <div id="app">
    <div class="soon">
      <a title="Go to Github" href="https://github.com/Jurasinho/kamil-jurowicz-app">
        <div class="user-avatar-wrapper">
        <user-avatar
          src="https://avatars0.githubusercontent.com/u/22557945?s=460&u=a28d3b6b093ff46e5fb63c0bc4c5df7309e1f281&v=4"></user-avatar>
          <img src="/img/GitHub-Mark-64px.png" class="github icon" alt="GitHub Mark">
        </div>
      </a>
      <p>website in progress.</p>
      <p>contact:</p>
      <small><a class="link" href="mailto:me@kamil-jurowicz.com">me@kamil-jurowicz.com</a></small>
    </div>
  </div>
</template>

<style lang="scss">
  @import "main";

  html {
    font-size: 16px;
  }

  body {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    font-family: $font-family-roboto;
    background-size: cover;
    background-position: center;
    background-color: $color-background-dark-1;
    background-image: linear-gradient(rgba(10, 10, 10, .6), rgba(0, 0, 0, .9)),
    repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px),
    url("/img/background.jpg");
  }
</style>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');
  @import "./main.scss";

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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    &.github {
      display: block;
      position: absolute;
      width: 32px;
      height: 32px;
      bottom: 8px;
      right: 8px;
    }
  }

  .link {
    text-underline: none;
    font-weight: normal;
    color: $color-primary;
    text-decoration: none;
    border-radius: $border-radius-1;
    box-shadow: none;
    font-size: 16px;
    transition: all ease-in-out 50ms;

    &:hover {
      color: #9c3f66;
    }

    &:active {
      color: #9c307a;
    }
  }

  .user-avatar-wrapper {
    position: relative;
    transition: transform 200ms ease-in-out;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }
  }


</style>
