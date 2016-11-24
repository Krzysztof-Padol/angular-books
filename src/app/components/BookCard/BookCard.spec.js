import angular from 'angular';
import 'angular-mocks';
import bookCardModule from './BookCard';

describe('bookCard component', () => {
  let element;
  let $scope;
  const someDateMock = "2012-05-26T06:30:00";

  beforeEach(() => {
    angular.mock.module(bookCardModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      jasmine.clock().install(); // mocking self.today value in service
      jasmine.clock().mockDate(new Date(someDateMock));

      $scope = $rootScope.$new();
      $scope.book = {
        name: 'Example name of book',
        cover: '/img.jpg',
        likes: 12345,
        published: '2003-09-18T01:59:14.918Z'
      };

      element = $compile('<book-card data-book="book"></book-card>')($scope);
      $rootScope.$digest();
    });
  });

  it('should render cover image', () => {
    const img = element.find('img');
    expect(img.attr('src')).toEqual(`${$scope.book.cover}`);
  });

  it('should render book name', () => {
    const span = angular.element(element[0].querySelectorAll('span.md-headline'));
    expect(span.html().trim()).toEqual(`${$scope.book.name}`);
  });

  it('should render number of likes', () => {
    const p = angular.element(element[0].querySelectorAll('p.md-body-1'));
    expect(p.html().trim()).toEqual(`${$scope.book.likes}`);
  });

  it('should render render relative time to publish date', () => {
    const span = angular.element(element[0].querySelectorAll('span.md-body-1'));
    expect(span.html().trim()).toEqual('9 years ago');
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
});
