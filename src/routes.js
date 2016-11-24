import {SIMILAR_BOOKS} from './app/constants/Books.js';

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/?category&genre',
      reloadOnSearch: false,
      component: 'booksFinder'
    })
    .state('details', {
      url: '/details/:id',
      component: 'bookDetails',
      resolve: {
        /** @ngInject */
        book($stateParams, BookService) {
          return BookService.findById($stateParams.id);
        },
        /** @ngInject */
        similar($stateParams, BookService) {
          return BookService.getSimilarToId($stateParams.id, SIMILAR_BOOKS);
        }
      }
    });
}

export default routesConfig;
