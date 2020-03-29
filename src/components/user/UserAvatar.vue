<template>
  <div class="user-avatar">
    <user-avatar-body :href="href" :title="title" >
      <slot></slot>
      <img :src="src" class="user-avatar__image-pic" :alt="alt">
      <icon-wrapper>
          <component class="user-avatar__icon" :is="icon" v-if="icon"></component>
      </icon-wrapper>
    </user-avatar-body>
    <user-avatar-under-text class="user-avatar__under-text">
      <slot name="under-text"></slot>
    </user-avatar-under-text>
  </div>
</template>

<script>
import UserAvatarBody from './UserAvatar__Body.vue';
import UserAvatarBadge from './UserAvatar__Badge.vue';
import IconWrapper from '../ui/IconWrapper.vue';
import UserAvatarUnderText from './UserAvatar__UnderText';

export default {
  components: { UserAvatarUnderText, UserAvatarBadge, IconWrapper, UserAvatarBody },
  props: {
    src: {
      type: String,
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
};
</script>

<style src="./UserAvatar.scss" lang="scss"></style>
