import angular from 'angular';
import 'angular-mocks';
import {bookIntroduction} from './BookIntroduction';

describe('bookIntroduction component', () => {
  beforeEach(() => {
    angular
      .module('bookIntroduction', ['app/components/BookIntroduction/BookIntroduction.html'])
      .component('bookIntroduction', bookIntroduction);
    angular.mock.module('bookIntroduction');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<bookIntroduction></bookIntroduction>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
