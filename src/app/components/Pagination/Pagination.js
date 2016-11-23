import angular from 'angular';
import template from './Pagination.html';

class PaginationController {
  constructor() {
    this.currentPage = this.currentPage || 0;
  }

  isPrev() {
    return this.currentPage !== 0;
  }

  isNext() {
    return this.currentPage < this.pagesNumber - 1;
  }

  changePage(nextPage) {
    this.currentPage = nextPage;
    if (angular.isFunction(this.onPageChange)) {
      this.onPageChange({
        currentPage: this.currentPage
      });
    }
  }

  prevPage() {
    if (this.isPrev()) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.isNext()) {
      this.changePage(this.currentPage + 1);
    }
  }
}

const pagination = {
  template,
  bindings: {
    currentPage: '<',
    pagesNumber: '<',
    onPageChange: '&'
  },
  controller: PaginationController
};

export const moduleName = 'components.pagination';

export default angular
  .module(moduleName, [])
  .component('pagination', pagination);
