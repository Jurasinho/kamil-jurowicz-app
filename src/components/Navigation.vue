<template>
  <div>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/styled-headlines">Styled Headlines Test</router-link>
  </div>

</template>

<style lang="scss" scoped>
  div {
    padding: 30px 15px;
    color: white;
    font-size: 18px;

    ::v-deep a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
      &.router-link-exact-active {
        color: #d04fff;
        text-decoration: underline;
      }
    }
  }
</style>
