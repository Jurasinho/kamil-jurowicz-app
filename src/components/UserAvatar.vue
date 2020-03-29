<template>
  <div class="avatar-image" :style="computedStyle" >
    <img :src="src" class="pic" :style="computedStyle">

  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      default: 'medium',
    },
  },
  computed: {
    computedStyle() {
      return {
        width: this.sizeLength,
        height: this.sizeLength,
      };
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
  },
};
</script>

<style scoped>
  img {
    width: 100%;
    height: auto;
  }
</style>
