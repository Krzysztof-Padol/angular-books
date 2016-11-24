import angular from 'angular';
import 'angular-mocks';
import searchHeaderModule from './SearchHeader';

describe('searchHeader component', () => {
  let $locationMock;
  const initQueryString = {};

  beforeEach(() => {
    $locationMock = jasmine.createSpyObj('$location', ['search']);
    $locationMock.search.and.returnValue(initQueryString);
    angular.mock.module(searchHeaderModule.name);
    angular.mock.module($provide => {
      $provide.value('$location', $locationMock);
    });
  });

  it('should call onFilterChange function', angular.mock.inject($componentController => {
    const bindings = {
      onFilterChange: () => {}
    };
    const component = $componentController('searchHeader', {}, bindings);
    spyOn(component, 'onFilterChange').and.callThrough();
    component.handleDataChange();
    expect(component.onFilterChange).toHaveBeenCalledWith({
      filters: {
        genre: '',
        category: '',
        search: ''
      }
    });
  }));

  it('should call onFilterChange function', angular.mock.inject($componentController => {
    const newValue = "newValueStr";
    const bindings = {
      onFilterChange: () => {}
    };
    const component = $componentController('searchHeader', {}, bindings);
    spyOn(component, 'onFilterChange').and.callThrough();
    component.filters.search = newValue;
    component.handleDataChange();
    expect(component.onFilterChange).toHaveBeenCalledWith({
      filters: {
        genre: '',
        category: '',
        search: newValue
      }
    });
  }));

  it('should update query string', angular.mock.inject($componentController => {
    const newValue = "newValueStr";
    const bindings = {
      onFilterChange: () => {}
    };
    const component = $componentController('searchHeader', {}, bindings);
    spyOn(component, 'onFilterChange').and.callThrough();
    component.filters.search = newValue;
    component.handleDataChange();
    expect($locationMock.search).toHaveBeenCalledWith('search', newValue);
  }));

  it('should remove query string', angular.mock.inject($componentController => {
    const newValue = "newValueStr";
    const bindings = {
      onFilterChange: () => {}
    };
    const component = $componentController('searchHeader', {}, bindings);
    spyOn(component, 'onFilterChange').and.callThrough();
    component.filters.search = newValue;
    component.handleDataChange();
    component.filters.search = '';
    component.handleDataChange();
    expect($locationMock.search).toHaveBeenCalledWith('search', null);
  }));
});
