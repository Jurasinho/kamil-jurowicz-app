<template>
  <div class="user-avatar__under-text">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'UserAvatarUnderText',
  };
</script>

<style scoped>
  .user-avatar__under-text {
    max-width: 100%;
    text-overflow: fade;
  }
</style>
