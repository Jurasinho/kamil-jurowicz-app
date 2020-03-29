<template>
  <div class="home">
    <div class="soon">
      <p>website in progress.</p>

      <user-avatars>
        <div class="user-avatar-wrapper">
          <user-avatar
            class="github user-avatar"
            size="small"
            :src="userKamil"
            href="https://github.com/Jurasinho/kamil-jurowicz-app"
            title="Go to Kamil Jurowicz's Github"
            :icon="GithubLogo"
          >
            <template #under-text>
              <user-avatar-under-text>
                <span class="github">@Jurasinho</span>
              </user-avatar-under-text>
            </template>
          </user-avatar>
        </div>
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
              <user-avatar-under-text>
                <span>me@kamil.jurowicz.com</span>
              </user-avatar-under-text>
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
              <user-avatar-under-text>
                <span class="twitter">@KJurowicz</span>
              </user-avatar-under-text>
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
            <template #badge>
              <user-avatar-badge>
                <span class="badge badge-private">personal</span>
              </user-avatar-badge>
            </template>

            <template #under-text>
              <user-avatar-under-text>
                <span class="twitter user-avatar__username">@jurasmiszcz</span>
              </user-avatar-under-text>
            </template>

          </user-avatar>
        </user-avatar-wrapper>
      </user-avatars>
      <div class="user-avatars">
      </div>
    </div>
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
    UserAvatarUnderText, UserAvatarWrapper, UserAvatars, UserAvatarBadge,
  },
  data() {
    return data;
  },
};
</script>

<style lang="scss" scoped>
  @import "../main";


    .user-avatar {
      .icon-wrapper {
        position: absolute;
        height: 48px;
        width: 48px;
        left: -5px;
        top: -5px;
      }

      &.github {
        stroke: transparent;

        path {
          fill: $color-github-fill
        }
      }

      &.twitter {
        .icon-wrapper {
          left: 5px;
          top: 5px
        }

        path {
          fill: $color-twitter;
        }
      }

      .user-avatar__under-text {
        .email > & {
          padding: 10px;
          fill: $icon-fill-color-base
        }
      }

      .badge {
        position: absolute;
        display: block;
        z-index: 2;
        font-size: 0.5em;
        padding: 0.5em;
        top: 5em;
        right: 5em;
        color: $color-white;
      }

      .badge-private {
        background-color: $color-background-private;
      }

      &__under {
        padding-top: 10px;

        a {
          color: white;
          text-decoration: none;
        }
      }
    }

</style>

<style lang="scss" scoped>
  @import "../main.scss";

  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    text-underline: none;
    font-weight: normal;
    color: $color-primary;
    text-decoration: none;
    border-radius: $border-radius-1;
    box-shadow: none;
    font-size: 16px;
    transition: all ease-in-out 50ms;

    &:hover {
      color: #9c3f66;
    }

    &:active {
      color: #9c307a;
    }
  }

  .user-avatar {
    margin: 0 1em;

    .user-avatar-link {
      text-decoration: none;
      text-underline: none;
    }

    .user-avatar-title {
      margin: 0.5em 0;
      padding: 0;
      color: white;
    }
  }


  .user-avatars {
    margin-top: 1em;
    padding: 1em;
    display: flex;
    justify-content: space-between;
  }

  .user-avatar-wrapper {
    position: relative;
    transition: transform 200ms ease-in-out;
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
    }
  }

</style>
