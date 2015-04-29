/* global angular */

angular.module('app').config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',

  function($stateProvider, $urlRouterProvider, $locationProvider) {

    function resolve($stateParams, Resource){
      var id = $stateParams.id;
      return id!=='new'?Resource.get({id: id, 'filter[include]': 'media'}).$promise:new Resource();
    }
    function resolveList(Resource){
      return Resource.find({}).$promise;
    }
    var listCtrl = ['$injector', '$state', '$scope', 'list', function($injector, $state, $scope, list){
      // if(list.length === 1){
      //   return $state.go(pluralize(list[0].modelName.toLowerCase()) + '.edit', {id: list[0].id});
      // }
      $scope.list = list;
      $scope.remove = function(item){
        item.$delete(function(){
          // TODO: Actually remove things.
          console.log('REMOVE');
        });
      };
    }];
    function instanceCtrl(name){
      var lower = name.toLowerCase();
      return ['$scope', '$state', name, lower, function($scope, $state, Resource, item){
        $scope[lower] = item || new Resource();
        $scope['save'+name] = function(item){
          if(item.id){
            return item.$upsert(done);
          }
          item.$create(done);
        };
        function done(){
          $state.go(lower+'s');
        }
      }];
    }

    function getCount(Resource){
      return Resource.count().$promise
        .then(function(res){
          return res.count;
        });
    }

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'DashboardCtrl',
      resolve:{
        eventCount: ['Event', getCount],
        postCount: ['Post', getCount],
        pageCount: ['Page', getCount]
      }
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
      },
      menu: [
        {action: 'eventEdit({id: "new"})', text: 'New Event +'}
      ]
    })
    .state('eventEdit', {
      title: 'Add/Edit Event',
      url: '/events/:id',
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
      title: 'Edit Entertainer',
      url: '/entertainers/:id',
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
    .state('mediaEdit', {
      title: 'Add/Edit Medium',
      controller: instanceCtrl('Medium'),
      url: '/media/:id',
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
      url: '/venues/:id',
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
      },
      menu: [
        {action: 'pageEdit({id: "new"})', text: 'New Page +'}
      ]
    })
    .state('pageEdit', {
      title: 'Edit Page',
      url: '/pages/:id',
      templateUrl: '/html/page/addEdit.html',
      controller: 'PageCtrl',
      resolve: {
        page: ['$stateParams', 'Page', resolve]
      }
    })
    .state('posts', {
      title: 'Post List',
      url: '/posts',
      templateUrl: '/html/blog/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Post', resolveList]
      },
      menu: [
        {action: 'postEdit({id: "new"})', text: 'New Post +'}
      ]
    })
    .state('postEdit', {
      title: 'Edit Post',
      url: '/posts/:id',
      templateUrl: '/html/blog/addEdit.html',
      controller: instanceCtrl('Post'),
      resolve: {
        post: ['$stateParams', 'Post', resolve]
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
      url: '/sites/:id',
      templateUrl: '/html/site/addEdit.html',
      controller: 'SiteCtrl',
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

  $locationProvider.html5Mode(true);
}]);
