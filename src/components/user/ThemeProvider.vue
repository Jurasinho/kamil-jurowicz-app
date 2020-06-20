<template>
  <div class="theme-provider" :class="['theme-' . themeName]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ThemeProvider',
    provide() {
      return {
        theme: this.themeName
      };
    },
    props: {
      themeName: {
        default: 'twitter'
      }
    }
  };
</script>
