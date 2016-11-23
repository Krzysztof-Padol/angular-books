import angular from 'angular';
import template from './SearchHeader.html';

class SearchHeaderController {
  handleDataChange() {
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
  .module(moduleName, [])
  .component('searchHeader', searchHeader);
