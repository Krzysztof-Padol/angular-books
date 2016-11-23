import angular from 'angular';
import template from './Pagination.html';
import {QUERY_STRING_NAME} from './../../constants/Pagination.js';

class PaginationController {
  /** @ngInject */
  constructor($location, QUERY_STRING_NAME) {
    this.$location = $location;
    this.QUERY_STRING_NAME = QUERY_STRING_NAME;
    this.currentPage = this.currentPage || 0;
  }

  $onInit() {
    const queryString = this.$location.search();

    if (this.QUERY_STRING_NAME in queryString) {
      this.changePage(parseInt(queryString.currentPage, 10));
    }
  }

  isPrev() {
    return this.currentPage !== 0;
  }

  isNext() {
    return this.currentPage < this.pagesNumber - 1;
  }

  updateRouting() {
    if (this.currentPage === 0) {
      this.$location.search(this.QUERY_STRING_NAME, null);
    } else {
      this.$location.search(this.QUERY_STRING_NAME, this.currentPage);
    }
  }

  changePage(nextPage) {
    this.currentPage = nextPage;
    this.updateRouting();
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
  .constant('QUERY_STRING_NAME', QUERY_STRING_NAME)
  .component('pagination', pagination);
