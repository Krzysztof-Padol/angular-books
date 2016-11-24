import angular from 'angular';
import 'angular-mocks';
import authorAvatarModule from './AuthorAvatar';

describe('authorAvatar component', () => {
  beforeEach(() => {
    angular.mock.module(authorAvatarModule.name);
  });

  it('should show name of author', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.author = {
      name: 'Example name'
    };
    const element = $compile('<author-avatar author="author"></author-avatar>')($scope);
    $rootScope.$digest();

    const name = element.find('h4');
    expect(name.html().trim()).toEqual(`by ${$scope.author.name}`);
  }));

  it('should render image', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.author = {
      avatar: 'http://example.com/img.jpg'
    };
    const element = $compile('<author-avatar author="author"></author-avatar>')($scope);
    $rootScope.$digest();

    const img = element.find('img');
    expect(img.attr('src')).toEqual(`${$scope.author.avatar}`);
  }));

  it('should hr', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.author = {
      avatar: 'http://example.com/img.jpg'
    };
    const element = $compile('<author-avatar author="author"></author-avatar>')($scope);
    $rootScope.$digest();

    const hr = element.find('hr');
    expect(hr).toBeDefined();
  }));
});
