import template from './BookIntroduction.html';
import 'angular-material';
import 'angular-material/angular-material.css';

export const bookIntroduction = {
  template,
  bindings: {
    introduction: '<'
  }
};

export const moduleName = 'components.bookIntroduction';

export default angular
  .module(moduleName, ['ngMaterial'])
  .component('bookIntroduction', bookIntroduction);
