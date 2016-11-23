import bookDetailsHeaderModule from './../../components/BookDetailsHeader/BookDetailsHeader.js';
import template from './BookDetails.html';
import styles from './BookDetails.scss';

class BookDetailsController {
  constructor() {
    this.styles = styles;
  }
}

export const bookDetails = {
  template,
  bindings: {
    book: '<',
    similar: '<'
  },
  controller: BookDetailsController
};

export const moduleName = 'containers.bookDetails';

export default angular
  .module(moduleName, [
    bookDetailsHeaderModule.name
  ])
  .component('bookDetails', bookDetails);
