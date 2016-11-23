import angular from 'angular';
import 'angular-mocks';
import paginationModule from './Pagination';

describe('pagination component', () => {
  beforeEach(() => {
    angular.mock.module(paginationModule.name);
  });

  it('should be rendered', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<pagination></pagination>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

  it('should show current page', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.pagesNumber = 5;
    const element = $compile('<pagination pages-number="pagesNumber"></pagination>')($scope);
    $rootScope.$digest();

    const info = element.find('span');
    expect(info.html().trim()).toEqual('1 / 5');
  }));

  it('should change current page after click on next', angular.mock.inject($componentController => {
    const bindings = {
      currentPage: 3,
      pagesNumber: 5
    };
    const component = $componentController('pagination', {}, bindings);
    component.nextPage();
    expect(component.currentPage).toBe(4);
  }));

  it('should not exceed over range of pagination', angular.mock.inject($componentController => {
    const bindings = {
      currentPage: 4,
      pagesNumber: 5
    };
    const component = $componentController('pagination', {}, bindings);
    component.nextPage();
    expect(component.currentPage).toBe(4);
  }));

  it('should not exceed lower then range of pagination', angular.mock.inject($componentController => {
    const bindings = {
      currentPage: 0,
      pagesNumber: 5
    };
    const component = $componentController('pagination', {}, bindings);
    component.prevPage();
    expect(component.currentPage).toBe(0);
  }));
});
