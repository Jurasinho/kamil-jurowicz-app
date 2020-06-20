import UserAvatar from './UserAvatar';
import UserAvatar__Badge from './UserAvatar__Badge';
import UserAvatar__Body from './UserAvatar__Body';
import UserAvatarWrapper from './UserAvatarWrapper';
import UserAvatars from './UserAvatars';
import UserAvatar__UnderText from './UserAvatar__UnderText';



export default {
  install (vue, options) {
    vue.component(UserAvatar);
    vue.component(UserAvatar__Badge);
    vue.component(UserAvatar__Body);
    vue.component(UserAvatarWrapper);
    vue.component(UserAvatars);
    vue.component(UserAvatar__UnderText);
  }
}
