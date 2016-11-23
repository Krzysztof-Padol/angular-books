import angular from 'angular';
import 'angular-mocks';
import {searchHeader} from './SearchHeader';

describe('searchHeader component', () => {
  beforeEach(() => {
    angular
      .module('searchHeader', ['app/components/SearchHeader/SearchHeader.html'])
      .component('searchHeader', searchHeader);
    angular.mock.module('searchHeader');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<searchHeader></searchHeader>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
