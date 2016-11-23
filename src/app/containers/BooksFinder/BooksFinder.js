import paginationModule from './../../components/Pagination/Pagination.js';
import searchHeaderModule from './../../components/SearchHeader/SearchHeader.js';
import bookCardModule from './../../components/BookCard/BookCard.js';
import {ITEMS_PER_PAGE} from './../../constants/Pagination.js';
import styles from './BooksFinder.scss';
import 'angular-material';
import 'angular-material/angular-material.css';

class BooksFinderController {
  /** @ngInject */
  constructor(BookService, ITEMS_PER_PAGE) {
    this.BookService = BookService;
    this.ITEMS_PER_PAGE = ITEMS_PER_PAGE;

    this.styles = styles;

    this.genres = BookService.getAllGenre();
    this.categories = BookService.getAllCategories();
    this.state = {
      currentPage: 0,
      filters: {}
    };

    this.getData();
  }

  getData() {
    const data = this.BookService.getData(this.state.currentPage, this.ITEMS_PER_PAGE, this.state.filters.filter, this.state.filters.search);

    this.books = data.elements;
    this.pages = data.pages;
  }

  handleFilterChange(filters) {
    this.state.currentPage = 0;
    this.state.filters = filters;
    this.getData();
  }

  handlePageChange(currentPage) {
    this.state.currentPage = currentPage;
    this.getData();
  }
}

const booksFinder = {
  templateUrl: 'app/containers/BooksFinder/BooksFinder.html',
  controller: BooksFinderController
};

export const moduleName = 'containers.booksFinder';

export default angular
  .module(moduleName, [
    paginationModule.name,
    searchHeaderModule.name,
    bookCardModule.name,
    'ngMaterial'
  ])
  .constant('ITEMS_PER_PAGE', ITEMS_PER_PAGE);
  .component('booksFinder', booksFinder);
