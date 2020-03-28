<template>
  <div class="socials-wrapper">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'SocialWrapper',
  props: {
    socials: {
      type: Array,
      default: () => ([]),
    },
  },
};

</script>

<style lang="scss" scoped>
  .socials-wrapper {

  }
</style>
