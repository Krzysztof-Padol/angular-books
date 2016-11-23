import 'angular-moment';
import styles from './BookCard.scss';
import template from './BookCard.html';
import 'angular-material';
import 'angular-material/angular-material.css';

class BookCardController {
  constructor() {
    this.styles = styles;
  }
}

export const bookCard = {
  template,
  bindings: {
    book: '<'
  },
  controller: BookCardController
};

export const moduleName = 'components.bookCard';

export default angular
  .module(moduleName, ['angularMoment', 'ngMaterial'])
  .component('bookCard', bookCard);
