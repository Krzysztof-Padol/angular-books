import template from './SimilarBooks.html';
import styles from './SimilarBooks.scss';

class SimilarBooksController {
  constructor() {
    this.styles = styles;
  }
}

export const similarBooks = {
  template,
  controller: SimilarBooksController,
  bindings: {
    similar: '<'
  }
};

export const moduleName = 'components.similarBooks';

export default angular
  .module(moduleName, [])
  .component('similarBooks', similarBooks);
