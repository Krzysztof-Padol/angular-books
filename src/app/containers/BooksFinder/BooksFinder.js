class BooksFinderController {
  /** @ngInject */
  constructor(BookService) {
    this.BookService = BookService;

    this.currentPage = 0;
    this.books = [];
    this.pages = 0;

    this.genreSet = BookService.getAllGenre();
    this.categorySet = BookService.getAllCategories();

    this.getData();
  }

  getData() {
    const data = this.BookService.getData(this.currentPage, 10, this.filter, this.search);

    this.books = data.elements;
    this.pages = data.pages;
  }

  prevPage() {
    this.currentPage--;
    this.getData();
  }

  nextPage() {
    this.currentPage++;
    this.getData();
  }
}

export const booksFinder = {
  templateUrl: 'app/containers/BooksFinder/BooksFinder.html',
  controller: BooksFinderController
};
