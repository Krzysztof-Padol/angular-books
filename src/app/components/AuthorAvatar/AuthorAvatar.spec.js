import angular from 'angular';
import 'angular-mocks';
import {authorAvatar} from './AuthorAvatar';

describe('authorAvatar component', () => {
  beforeEach(() => {
    angular
      .module('authorAvatar', ['app/components/AuthorAvatar/AuthorAvatar.html'])
      .component('authorAvatar', authorAvatar);
    angular.mock.module('authorAvatar');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<authorAvatar></authorAvatar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
