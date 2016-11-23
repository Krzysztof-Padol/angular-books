export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'booksFinder'
    })
    .state('details', {
      url: '/details/:id',
      component: 'bookDetails',
      resolve: {
        /** @ngInject */
        book($stateParams, BookService) {
          return BookService.findById($stateParams.id);
        }
      }
    });
}
