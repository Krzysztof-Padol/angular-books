import angular from 'angular';
import 'angular-mocks';
import {bookCard} from './BookCard';

describe('bookCard component', () => {
  beforeEach(() => {
    angular
      .module('bookCard', ['app/components/BookCard/BookCard.html'])
      .component('bookCard', bookCard);
    angular.mock.module('bookCard');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<bookCard></bookCard>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
