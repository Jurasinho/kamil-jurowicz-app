<template>
  <div class="user-avatar-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "UserAvatarWrapper",
  }
</script>

<style scoped>
  .user-avatar-wrapper {
    max-width: 100vw;
  }
</style>
