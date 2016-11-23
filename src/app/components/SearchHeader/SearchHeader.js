import angular from 'angular';
import template from './SearchHeader.html';
import 'angular-material';
import 'angular-material/angular-material.css';

class SearchHeaderController {
  /** @ngInject */
  constructor($location) {
    this.$location = $location;
    this.filters = {
      genre: '',
      category: '',
      search: ''
    };
  }

  $onInit() {
    const queryString = this.$location.search();

    Object.keys(this.filters).forEach(filter => {
      if (filter in queryString) {
        this.filters[filter] = queryString[filter];
      }
    });

    this.handleDataChange();
  }

  updateRouting() {
    Object.keys(this.filters).forEach(filter => {
      if (this.filters[filter] === '') {
        this.$location.search(filter, null);
      } else {
        this.$location.search(filter, this.filters[filter]);
      }
    });
  }

  handleDataChange() {
    this.updateRouting();

    if (angular.isFunction(this.onFilterChange)) {
      this.onFilterChange({
        filters: angular.merge({}, this.filters)
      });
    }
  }
}

export const searchHeader = {
  template,
  bindings: {
    categories: '<',
    genres: '<',
    onFilterChange: '&'
  },
  controller: SearchHeaderController
};

export const moduleName = 'components.searchHeader';

export default angular
  .module(moduleName, ['ngMaterial'])
  .component('searchHeader', searchHeader);
