import angular from 'angular';
import 'angular-mocks';
import {bookDetails} from './BookDetails';

describe('bookDetails component', () => {
  beforeEach(() => {
    angular
      .module('bookDetails', ['app/containers/BookDetails/BookDetails.html'])
      .component('bookDetails', bookDetails);
    angular.mock.module('bookDetails');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<bookDetails></bookDetails>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
