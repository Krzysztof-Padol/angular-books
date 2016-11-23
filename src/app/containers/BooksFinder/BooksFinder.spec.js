import angular from 'angular';
import 'angular-mocks';
import {booksFinder} from './BooksFinder';

describe('booksFinder component', () => {
  beforeEach(() => {
    angular
      .module('booksFinder', ['app/containers/BooksFinder/BooksFinder.html'])
      .component('booksFinder', booksFinder);
    angular.mock.module('booksFinder');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<booksFinder></booksFinder>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
