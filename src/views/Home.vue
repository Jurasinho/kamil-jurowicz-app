<template>
  <div class="home">
      <div class="soon">
          <p>website in progress.</p>
      </div>
      <user-avatars>
        <user-avatar-wrapper class="user-avatar-wrapper">
          <user-avatar
            class="github user-avatar"
            size="small"
            :src="userKamil"
            href="https://github.com/Jurasinho/kamil-jurowicz-app"
            title="Go to Kamil Jurowicz's Github"
            :icon="GithubLogo"
          >
            <template #under-text>
                <span>@Jurasinho</span>
            </template>
          </user-avatar>
        </user-avatar-wrapper>
        <user-avatar-wrapper class="user-avatar-wrapper">
          <user-avatar
            class="email user-avatar"
            size="small"
            :src="userJurasKjerag"
            href="mailto:me@kamil.jurowicz.com"
            title="Send email to Kamil Jurowicz"
            :icon="IconMail"
          >
            <template #under-text>
                <span>me@kamil.jurowicz.com</span>
            </template>
          </user-avatar>
        </user-avatar-wrapper>
        <user-avatar-wrapper class="user-avatar-wrapper">
          <user-avatar
            class="twitter user-avatar"
            size="small"
            :src="userJurasKjerag"
            href="https://twitter.com/KJurowicz"
            title="Send email to Kamil Jurowicz"
            :icon="IconTwitter"
          >
            <template #under-text>
                <span>@KJurowicz</span>
            </template>
          </user-avatar>
        </user-avatar-wrapper>
        <user-avatar-wrapper class="user-avatar-wrapper">
          <user-avatar
            class="twitter user-avatar"
            size="small"
            :src="userJurasRicky"
            href="https://twitter.com/jurasmiszcz"
            title="Go to Kamil Jurowicz Personal twitter"
            :icon="IconTwitter"
          >
            <user-avatar-badge class="badge-private">private</user-avatar-badge>
            <template #under-text>
                <span>@jurasmiszcz</span>
            </template>
          </user-avatar>
        </user-avatar-wrapper>
      </user-avatars>
    </div>
</template>

<script>
  import GithubLogo from '../assets/company.github.svg';
  import IconTwitter from '../assets/company.twitter.svg';
  import IconMail from '../assets/icon.mail.svg';

  import userKamil from '../assets/user.kamil.jpg';
  import userJurasKjerag from '../assets/user.juras.kjerag.jpg';
  import userJurasRicky from '../assets/user.juras.ricky.jpg';

  import UserAvatars from '../components/user/UserAvatars.vue';
  import UserAvatarWrapper from '../components/user/UserAvatarWrapper.vue';
  import UserAvatarUnderText from '../components/user/UserAvatar__UnderText.vue';
  import UserAvatarBadge from '../components/user/UserAvatar__Badge.vue';


  const data = {
    userKamil,
    userJurasKjerag,
    userJurasRicky,
    IconMail,
    GithubLogo,
    IconTwitter,
  };

  export default {
    name: 'Home',
    components: {
      UserAvatarUnderText,
      UserAvatarWrapper,
      UserAvatars,
      UserAvatarBadge,
    },
    data() {
      return data;
    },
  };
</script>

<style lang="scss">
  @import "../base";
  @import "Home";

  .user-avatar__badge {
    position: absolute;
    background-color: $color-primary;
    right: 0.8em;
    top: 0.8em;
    padding: 0;
    color: white;
    text-transform: uppercase;
    font-family: $font-family-roboto;
    line-height: initial;
    font-size: 0.8em;
  }

</style>
