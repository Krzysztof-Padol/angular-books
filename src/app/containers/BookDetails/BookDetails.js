import authorAvatarModule from './../../components/AuthorAvatar/AuthorAvatar.js';
import bookDetailsHeaderModule from './../../components/BookDetailsHeader/BookDetailsHeader.js';
import bookIntroductionModule from './../../components/BookIntroduction/BookIntroduction.js';
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
    bookDetailsHeaderModule.name,
    bookIntroductionModule.name,
    authorAvatarModule.name
  ])
  .component('bookDetails', bookDetails);
