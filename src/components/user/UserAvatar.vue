<template>
  <div class="user-avatar">
    <a :href="href" :title="title" class="user-avatar__body user-avatar__body--link is-link" :style="computedStyle">
      <img :src="src" class="user-avatar__image-pic" :alt="alt">
      <user-avatar-body>
        <icon-wrapper>
            <component class="user-avatar__icon" :is="icon" v-if="icon"></component>
        </icon-wrapper>
      </user-avatar-body>
    </a>
    <div class="user-avatar__under-text">
      <slot name="under-text"></slot>
    </div>
  </div>
</template>

<script>
import UserAvatarBody from './UserAvatar__Body.vue';
import IconWrapper from '../ui/IconWrapper.vue';

export default {
  components: { IconWrapper, UserAvatarBody },
  props: {
    src: {
      type: String,
    },
    size: {
      default: 'medium',
    },
    alt: {
      default: '',
    },
    href: {
      default: null,
    },
    title: {
      default: '',
    },
    icon: {
      default: null,
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

<style lang="scss">
  @import "../../main";

  .user-avatar {
    .user-avatar__content {
      text-decoration: unset;
      font-size: 1rem;
    }
  }
</style>

<style scoped lang="scss">
  @import "../../main";

  .user-avatar {
    font-size: 1em;
    line-height: 1em;
  }

  .user-avatar__body {

  }

  .user-avatar__username {
    display: block;
    color: $color-username;
  }

  .user-avatar__username.email {
    font-size: 0.8125em;
    line-height: 20px;
  }

  .user-avatar__image {
    position: relative;
    display: block;
  }

  .user-avatar__image-pic {
    width: 100%;
    height: auto;
  }

  .user-avatar__image-content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  .user-image__icon {
    fill: $icon-fill-color-base;
  }

</style>
