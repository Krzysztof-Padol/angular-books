import angular from 'angular';
import 'angular-mocks';
import {bookDetailsHeader} from './BookDetailsHeader';

describe('bookDetailsHeader component', () => {
  beforeEach(() => {
    angular
      .module('bookDetailsHeader', ['app/components/BookDetailsHeader/BookDetailsHeader.html'])
      .component('bookDetailsHeader', bookDetailsHeader);
    angular.mock.module('bookDetailsHeader');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<bookDetailsHeader></bookDetailsHeader>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
