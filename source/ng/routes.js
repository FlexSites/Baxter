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
    var listCtrl = ['$injector', '$state', '$scope', 'list', function($injector, $state, $scope, list){
      // if(list.length === 1){
      //   return $state.go(pluralize(list[0].modelName.toLowerCase()) + '.edit', {id: list[0].id});
      // }
      console.log("list", list);
      $scope.list = list;
      $scope.remove = function(item){
        item.$delete(function(){
          // TODO: Actually remove things.
          console.log('REMOVE');
        });
      };
    }];
    function instanceCtrl(name){
      console.log('instance', name);
      var lower = name.toLowerCase();
      return ['$scope', name, lower, function($scope, Resource, item){
        console.log('instance', name, item);
        $scope[lower] = item || new Resource();
        $scope['save'+name] = function(item){
          if(item.id){
            return item.$upsert(function(){
              console.log('saving',name,arguments);
            });
          }
          console.log('creating', item);
          item.$create(function(){
            console.log('created',name,arguments);
          });
        };
      }];
    }

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
    .state('event', {
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
    .state('entertainers.edit', {
      title: 'Edit Entertainer',
      url: '/:id',
      templateUrl: '/html/entertainer/addEdit.html',
      controller: instanceCtrl('Entertainer'),
      resolve: {
        entertainer: ['$stateParams', 'Entertainer', resolve]
      }
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
    .state('media.add', {
      title: 'Add Medium',
      url: '/add',
      templateUrl: '/html/media/addEdit.html'
    })
    .state('media.edit', {
      title: 'Edit Medium',
      controller: instanceCtrl('Medium'),
      url: '/:id',
      templateUrl: '/html/media/addEdit.html',
      resolve: {
        medium: ['$stateParams', 'Medium', resolve]
      }
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
      title: 'Site List',
      url: '/sites',
      templateUrl: '/html/site/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Site', resolveList]
      }
    })
    .state('siteEdit', {
      title: 'Site Edit',
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
