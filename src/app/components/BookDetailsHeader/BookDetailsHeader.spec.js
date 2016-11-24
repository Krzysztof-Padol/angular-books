import angular from 'angular';
import 'angular-mocks';
import bookDetailsModule from './BookDetailsHeader';

describe('bookDetailsHeader component', () => {
  let element;
  let $scope;

  beforeEach(() => {
    angular.mock.module(bookDetailsModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      $scope.book = {
        name: 'Example name',
        avatar: 'http://example.com/img.jpg',
        description: 'Example description',
        author: {
          name: 'Some Author'
        }
      };

      element = $compile('<book-details-header data-book="book"></book-details-header>')($scope);
      $rootScope.$digest();
    });
  });

  it('should render book name', () => {
    const h1 = element.find('h1');
    expect(h1.html().trim()).toEqual(`${$scope.book.name}`);
  });

  it('should render author name', () => {
    const h4 = element.find('h4');
    expect(h4.html().trim()).toEqual(`by ${$scope.book.author.name}`);
  });

  it('should render book name', () => {
    const p = angular.element(element[0].querySelectorAll('p.md-subhead'));
    expect(p.html().trim()).toEqual(`${$scope.book.description}`);
  });
});
