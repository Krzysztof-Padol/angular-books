import paginationModule from './../../components/Pagination/Pagination.js';

class BooksFinderController {
  /** @ngInject */
  constructor(BookService) {
    this.BookService = BookService;

    this.books = [];
    this.pages = 0;

    this.genreSet = BookService.getAllGenre();
    this.categorySet = BookService.getAllCategories();

    this.getData();
  }

  getData(currentPage = 0) {
    const data = this.BookService.getData(currentPage, 10, this.filter, this.search);

    this.books = data.elements;
    this.pages = data.pages;
  }

  onPageChange(currentPage) {
    this.getData(currentPage);
  }
}

const booksFinder = {
  templateUrl: 'app/containers/BooksFinder/BooksFinder.html',
  controller: BooksFinderController
};

export const moduleName = 'containers.booksFinder';

export default angular
  .module(moduleName, [paginationModule.name])
  .component('booksFinder', booksFinder);
