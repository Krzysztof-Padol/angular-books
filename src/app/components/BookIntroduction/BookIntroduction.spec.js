import angular from 'angular';
import 'angular-mocks';
import bookIntroductionModule from './BookIntroduction';

describe('bookIntroduction component', () => {
  let element;
  let $scope;

  beforeEach(() => {
    angular.mock.module(bookIntroductionModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      $scope.introduction = [
        {
          content: '123'
        },
        {
          content: '234'
        },
        {
          content: '345'
        }
      ];

      element = $compile('<book-introduction data-introduction="introduction"></book-introduction>')($scope);
      $rootScope.$digest();
    });
  });

  it('should render 3 paragraphs', () => {
    const listElements = angular.element(element[0].querySelectorAll('p.md-body-1'));
    expect(listElements.length).toBe(3);
  });
});
