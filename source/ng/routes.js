angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/'
    })
    .state('events', {
      url: '/events',
      templateUrl: '/html/event/list.html'
    })
    .state('entertainer', {
      url: '/entertainer',
      templateUrl: '/html/entertainer/list.html'
    })
    .state('media', {
      url: '/media',
      templateUrl: '/html/media/list.html'
    })
    .state('pages', {
      url: '/pages',
      templateUrl: '/html/pages/list.html'
    })
    .state('sections', {
      url: '/sections',
      templateUrl: '/html/sections/list.html'
    })
    .state('sites', {
      url: '/sites',
      templateUrl: '/html/sites/list.html'
    })
    .state('subscribers', {
      url: '/subscribers',
      templateUrl: '/html/subscribers/list.html'
    });
}]);