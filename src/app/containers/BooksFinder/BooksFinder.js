import paginationModule from './../../components/Pagination/Pagination.js';
import searchHeaderModule from './../../components/SearchHeader/SearchHeader.js';
import bookCardModule from './../../components/BookCard/BookCard.js';
import styles from './BooksFinder.scss';

class BooksFinderController {
  /** @ngInject */
  constructor(BookService) {
    this.BookService = BookService;

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
    const data = this.BookService.getData(this.state.currentPage, 6, this.state.filters.filter, this.state.filters.search);

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
    bookCardModule.name
  ])
  .component('booksFinder', booksFinder);
