import angular from 'angular';
import 'angular-mocks';
import paginationModule from './Pagination';
import {QUERY_STRING_NAME} from './../../constants/Pagination.js';

describe('pagination component', () => {
  let $locationMock;
  const initQueryString = {};

  beforeEach(() => {
    $locationMock = jasmine.createSpyObj('$location', ['search']);
    $locationMock.search.and.returnValue(initQueryString);
    angular.mock.module(paginationModule.name);
    angular.mock.module($provide => {
      $provide.value('$location', $locationMock);
    });
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

  it('should update query string if page is changed', angular.mock.inject($componentController => {
    const bindings = {
      currentPage: 0,
      pagesNumber: 5
    };
    const component = $componentController('pagination', {}, bindings);
    component.nextPage();
    expect($locationMock.search).toHaveBeenCalledWith(QUERY_STRING_NAME, 1);
  }));

  it('should remove query string if page is on index 0', angular.mock.inject($componentController => {
    const bindings = {
      currentPage: 0,
      pagesNumber: 5
    };
    const component = $componentController('pagination', {}, bindings);
    component.nextPage();
    component.prevPage();
    expect($locationMock.search).toHaveBeenCalledWith(QUERY_STRING_NAME, null);
  }));
});
