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
    .state('entertainers', {
      url: '/entertainer',
      templateUrl: '/html/entertainer/list.html'
    })
    .state('media', {
      url: '/media',
      templateUrl: '/html/media/list.html'
    })
    .state('venues', {
      url: '/venue',
      templateUrl: '/html/venue/list.html'
    })
    .state('pages', {
      url: '/page',
      templateUrl: '/html/page/list.html'
    })
    .state('sections', {
      url: '/section',
      templateUrl: '/html/section/list.html'
    })
    .state('sites', {
      url: '/site',
      templateUrl: '/html/site/list.html'
    })
    .state('subscribers', {
      url: '/subscriber',
      templateUrl: '/html/subscriber/list.html'
    });
}]);