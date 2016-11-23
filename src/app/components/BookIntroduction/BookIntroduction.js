import template from './BookIntroduction.html';

export const bookIntroduction = {
  template,
  bindings: {
    introduction: '<'
  }
};

export const moduleName = 'components.bookIntroduction';

export default angular
  .module(moduleName, [])
  .component('bookIntroduction', bookIntroduction);
