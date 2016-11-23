import template from './AuthorAvatar.html';
import styles from './AuthorAvatar.scss';
import 'angular-material';
import 'angular-material/angular-material.css';

class AuthorAvatarController {
  constructor() {
    this.styles = styles;
  }
}

export const authorAvatar = {
  template,
  controller: AuthorAvatarController,
  bindings: {
    author: '<'
  }
};

export const moduleName = 'components.authorAvatar';

export default angular
  .module(moduleName, ['ngMaterial'])
  .component('authorAvatar', authorAvatar);
