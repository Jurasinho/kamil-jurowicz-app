<template>
  <div class="social-medium" :class="computedClass">

  </div>
</template>

<script>
export default {
  name: 'SocialMedium',
  props: {
    type: {
      type: String,
      default: 'twitter',
    },
  },
  computed: {
    // eslint-disable-next-line consistent-return
    computedClass() {
      const { type } = this;

      // eslint-disable-next-line default-case
      switch (type) {
        case 'twitter':
          return 'social-medium-twitter twitter-theme';
        case 'linkedin':
        case 'default':
          return 'social-medium-twitter ';
      }
      return 'social-medium-twitter ';
    },
  },
};
</script>
