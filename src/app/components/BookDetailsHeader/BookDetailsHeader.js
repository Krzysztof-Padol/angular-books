import template from './BookDetailsHeader.html';
import styles from './BookDetailsHeader.scss';
import 'angular-material';
import 'angular-material/angular-material.css';

class BookDetailsHeaderController {
  constructor() {
    this.styles = styles;
  }
}

export const bookDetailsHeader = {
  template,
  bindings: {
    book: '<'
  },
  controller: BookDetailsHeaderController
};

export const moduleName = 'components.bookDetailsHeader';

export default angular
  .module(moduleName, ['ngMaterial'])
  .component('bookDetailsHeader', bookDetailsHeader);
