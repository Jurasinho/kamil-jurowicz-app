<template>
  <div class="user-avatar__badge">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UserAvatarBadge',
};
</script>

<style lang="scss" scoped>
  @import "../../base"; // will be variables todo

  // initial
  $padding: em(3px, 16px) 1em;
  $border-radius: 5px;

  .user-avatar__badge {
    padding: $padding;
    border-radius: $border-radius;
  }
</style>
