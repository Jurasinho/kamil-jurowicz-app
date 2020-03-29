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
  @import "../../main";

  // LOCAL - can't be defaults
  $background: $user-avatar-badge-background;
  .user-avatar__badge {
    background: $background;
  }
</style>
