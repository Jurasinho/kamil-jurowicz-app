<template>
  <header class="the-header">
    <picture>
      <img :src="Kamil" alt="" width="120px" height="120px">
    </picture>
    <div class="profile">
      <p class="profile__subtitle">
        Front-End Developer
      </p>
      <p class="profile__title">
        Kamil Jurowicz
      </p>
      <p class="profile__description">
        <a href="mailto:me@kamil-jurowicz.com">me@kamil-jurowicz.com</a>
      </p>
    </div>
  </header>
</template>

<script>
  import Kamil from "../assets/user.kamil.jpg";

  export default {
    name: "TheHeader",
    data() {
      return {
        Kamil
      }
    }
  }
</script>

<style lang="scss">
  @import "../base";

  header {
    margin-top: 1em;
    display: flex;
    padding: 0.5em;
    width: 100%;
    max-width: 920px;
    background-color: rgba($color-background-dark-1, 0.5);
    color: white;
  }

  .profile {
    padding: 40px 1em;
  }

  .profile {
    p {
      margin: 0;
      padding: 0;
    }
    &__title {
      font-family: $font-family-roboto;
      font-size: 1.3em;
    }
    &__subtitle {
      font-family: $font-family-monospace;
      font-size: 0.75em;
      font-weight: normal;
      color: #d04fff;
      text-transform: uppercase;
    }
    &__description {
      a {
        color: #d04fff;
        font-size: 0.75em;
      }

    }
  }
</style>
