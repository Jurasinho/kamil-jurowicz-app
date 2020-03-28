<template>
  <aside id="app-sidebar">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style lang="scss" scoped>
  @import "../../main";

  .container {
    max-width: 1200px;
  }

  .home {
    position: relative;
  }

  .sidebar {
    left: 0;
    top: 0;
    bottom: 0;
    background-color: $color-background-dark-2;
    width: 200px;
    height: 100%;
    z-index: 10;
    position: fixed;

    a {
      @include make-primary-button();
      display: block;

    }
  }
</style>
