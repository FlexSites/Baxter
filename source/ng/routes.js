angular.module('app').config([
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider', 

  function($stateProvider, $urlRouterProvider, $locationProvider) {

    function resolve($stateParams, Resource){
      var id = $stateParams.id;
      return id?Resource.get({id: id}).$promise:new Resource();
    }
    function resolveList(Resource){
      return Resource.find({}).$promise;
    }
    var listCtrl = ['$scope', 'list', function($scope, list){

      $scope.list = list;
      $scope.remove = function(item){
        // TODO: Actually remove things.
        console.log('REMOVE');
      };
    }];
    function instanceCtrl(name){
      var lower = name.toLowerCase();
      return ['$scope', name, lower, function($scope, Resource, item){
        $scope[lower] = item || new Resource();
        $scope['save'+name] = function(item){
          item.$upsert(function(){
            console.log('saving',name,arguments);
          });
        };
      }];
    }

    $urlRouterProvider.when('/pages', '/pages/new');
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })
    .state('login', {
      title: 'Login',
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'LoginCtrl'
    })
    .state('events', {
      title: 'Event List',
      url: '/events',
      templateUrl: '/html/event/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Event', resolveList]
      }
    })
    .state('event.edit', {
      title: 'Add/Edit Event',
      url: '/event/:id',
      templateUrl: '/html/event/addEdit.html',
      resolve: {
        event: ['$stateParams', 'Event', resolve]
      }
    })
    .state('entertainers', {
      title: 'Entertainer List',
      url: '/entertainers',
      templateUrl: '/html/entertainer/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Entertainer', resolveList]
      }
    })
    .state('entertainerEdit', {
      title: 'Add/Edit Entertainer',
      url: '/entertainer/:id',
      templateUrl: '/html/entertainer/addEdit.html'
    })
    .state('media', {
      title: 'Media List',
      url: '/media',
      templateUrl: '/html/media/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Medium', resolveList]
      }
    })
    .state('mediumEdit', {
      title: 'Add/Edit Medium',
      url: '/medium/:id',
      templateUrl: '/html/media/addEdit.html'
    })
    .state('venues', {
      title: 'Venue List',
      url: '/venues',
      templateUrl: '/html/venue/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Venue', resolveList]
      }
    })
    .state('venueEdit', {
      title: 'Add/Edit Venue',
      url: '/venue/:id?',
      templateUrl: '/html/venue/addEdit.html',
      controller: instanceCtrl('Venue'),
      resolve: {
        venue: ['$stateParams', 'Venue', resolve]
      }
    })
    .state('pages', { 
      title: 'Page List',
      url: '/pages',
      templateUrl: '/html/page/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Page', resolveList]
      }
    })
    .state('pages.add', {
      title: 'New Page',
      url: '/new',
      templateUrl: '/html/page/addEdit.html',
      controller: instanceCtrl('Page'),
      resolve: {
        page: ['$stateParams', 'Page', resolve]
      }
    })
    .state('pages.edit', {
      title: 'Edit Page',
      url: '/:id',
      templateUrl: '/html/page/addEdit.html',
      controller: instanceCtrl('Page'),
      resolve: {
        page: ['$stateParams', 'Page', resolve]
      }
    })
    .state('sections', {
      title: 'Section List',
      url: '/section',
      templateUrl: '/html/section/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Section', resolveList]
      }
    })
    .state('sites', {
      title: 'Add/Edit Section',
      url: '/sites',
      templateUrl: '/html/site/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Site', resolveList]
      }
    })
    .state('siteEdit', {
      title: 'Site List',
      url: '/site/:id?',
      templateUrl: '/html/site/add.html',
      controller: instanceCtrl('Site'),
      resolve: {
        site: ['$stateParams', 'Site', resolve]
      }
    })
    .state('subscribers', {
      title: 'Add/Edit Site',
      url: '/subscriber',
      templateUrl: '/html/subscriber/list.html'
    })

    // ERROR STATES
    .state('error', {
      url: '/error',
      templateUrl: '/html/error/404.html'
    });

}]);
