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

  prevPage() {
    if (this.isPrev()) {
      this.currentPage--;
      if (this.onPageChange) {
        this.onPageChange({
          currentPage: this.currentPage
        });
      }
    }
  }

  nextPage() {
    if (this.isNext()) {
      this.currentPage++;
      if (this.onPageChange) {
        this.onPageChange({
          currentPage: this.currentPage
        });
      }
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
