angular.module('app').config([
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 

  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true)
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
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
      templateUrl: '/html/page/list.html',
      controller: 'ListCtrl',
      resolve: {
        list: ['Page', function(Page){
          return Page.find({}).$promise;
        }]
      }
    })
    .state('sections', {
      url: '/section',
      templateUrl: '/html/section/list.html'
    })
    .state('sites', {
      url: '/site',
      templateUrl: '/html/site/list.html',
      controller: 'ListCtrl',
      resolve: {
        list: ['Site', function(Site){
          return Site.find({}).$promise;
        }]
      }
    })
    .state('subscribers', {
      url: '/subscriber',
      templateUrl: '/html/subscriber/list.html'
    });
}]);
