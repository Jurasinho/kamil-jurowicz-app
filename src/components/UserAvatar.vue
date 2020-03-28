<template>
  <div class="avatar-me" :class="computedClass">
    <img :src="avatar" alt="" :width="width" :height="height">
  </div>
</template>

<script>

export default {
  props: {
    user: {
      required: true,
    },
    size: {
      default: 'medium',
    },
  },
  computed: {
    computedClass() {
      return [''];
    },
    avatar() {
      return this.user.avatar;
    },
    sizeLength() {
      switch (this.size) {
        case 'x-small':
          return '50px';
        case 'small':
          return '150px';
        case 'medium':
          return '200px';
        default:
          return '250px';
      }
    },
    width() {
      return this.sizeLength;
    },
    height() {
      return this.sizeLength;
    },
  },
};
</script>
