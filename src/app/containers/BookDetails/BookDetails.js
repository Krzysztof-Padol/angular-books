import template from './BookDetails.html';
import styles from './BookDetails.scss';

class BookDetailsController {
  constructor() {
    this.styles = styles;
  }
}

export const bookDetails = {
  template,
  bindings: {book: '<'},
  controller: BookDetailsController
};

export const moduleName = 'containers.bookDetails';

export default angular
  .module(moduleName, [])
  .component('bookDetails', bookDetails);
