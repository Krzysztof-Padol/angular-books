import angular from 'angular';
import 'angular-mocks';
import {similarBooks} from './SimilarBooks';

describe('similarBooks component', () => {
  beforeEach(() => {
    angular
      .module('similarBooks', ['app/components/SimilarBooks/SimilarBooks.html'])
      .component('similarBooks', similarBooks);
    angular.mock.module('similarBooks');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<similarBooks></similarBooks>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
