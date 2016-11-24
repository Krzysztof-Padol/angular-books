import angular from 'angular';
import 'angular-mocks';
import authorAvatarModule from './AuthorAvatar';

describe('authorAvatar component', () => {
  let element;
  let $scope;

  beforeEach(() => {
    angular.mock.module(authorAvatarModule.name);

    angular.mock.inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      $scope.author = {
        name: 'Example name',
        avatar: 'http://example.com/img.jpg'
      };

      element = $compile('<author-avatar author="author"></author-avatar>')($scope);
      $rootScope.$digest();
    });
  });

  it('should show name of author', () => {
    const name = element.find('h4');
    expect(name.html().trim()).toEqual(`by ${$scope.author.name}`);
  });

  it('should render image', () => {
    const img = element.find('img');
    expect(img.attr('src')).toEqual(`${$scope.author.avatar}`);
  });

  it('should render hr', () => {
    const hr = element.find('hr');
    expect(hr).toBeDefined();
  });
});
