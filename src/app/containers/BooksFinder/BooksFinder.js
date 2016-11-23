class BooksFinderController {
  /** @ngInject */
  constructor(BookService) {
    this.text = `My brand new component! ${BookService.getData().pages} ${BookService.getData().elements.length}`;
  }
}

export const booksFinder = {
  templateUrl: 'app/containers/BooksFinder/BooksFinder.html',
  controller: BooksFinderController
};
