import authorAvatarModule from './../../components/AuthorAvatar/AuthorAvatar.js';
import bookDetailsHeaderModule from './../../components/BookDetailsHeader/BookDetailsHeader.js';
import bookIntroductionModule from './../../components/BookIntroduction/BookIntroduction.js';
import similarBooksModule from './../../components/SimilarBooks/SimilarBooks.js';
import template from './BookDetails.html';
import styles from './BookDetails.scss';
import 'angular-material';
import 'angular-material/angular-material.css';

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
    authorAvatarModule.name,
    similarBooksModule.name,
    'ngMaterial'
  ])
  .component('bookDetails', bookDetails);
