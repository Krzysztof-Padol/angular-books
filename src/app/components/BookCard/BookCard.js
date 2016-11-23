import 'angular-moment';
import styles from './BookCard.scss';
import template from './BookCard.html';

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
  .module(moduleName, ['angularMoment'])
  .component('bookCard', bookCard);
