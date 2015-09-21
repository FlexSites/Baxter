/* global angular */

angular.module('app').config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',

  function($stateProvider, $urlRouterProvider, $locationProvider) {

    function resolve($stateParams, Resource){
      var id = $stateParams.id;
      return id!=='new'?Resource.get({id: id}).$promise:new Resource();
    }
    function resolveList(Resource){
      return Resource.find({}).$promise;
    }
    var listCtrl = ['$injector', '$state', '$scope', 'list', function($injector, $state, $scope, list){
      // if(list.length === 1){
      //   return $state.go(pluralize(list[0].modelName.toLowerCase()) + '.edit', {id: list[0].id});
      // }
      $scope.list = list;
      $scope.remove = function(item, arr, name){
        if (window.confirm('Are you sure you want to delete ' + (name || 'this item') + '?')) {
          item.$delete(function(){
            // TODO: Actually remove things.
            arr.splice(arr.indexOf(item), 1);
          });
        }
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
        $scope['remove'+name] = function(){
          console.log(arguments);
        }
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
      title: 'Dashboard',
      resolve:{
        eventCount: ['Event', getCount],
        postCount: function(){return 1},//['Post', getCount],
        pageCount: ['Page', getCount],
        subscriberCount: ['Subscriber', getCount]
      }
    })
    .state('login', {
      title: 'Login',
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'LoginCtrl'
    })
    .state('paymentInfo', {
      title: 'Payment Information',
      url: '/payment-info',
      templateUrl: '/html/profile/payment.html',
      resolve: {
        token: ['Order', function(Order){
          return Order.token().$promise
            .then(function(res){
              return res.token;
            });
        }]
      },
      controller: ['token', function(token){
        braintree.setup(token, "custom", {
          id: "checkout"
        });
      }]
    })
    .state('events', {
      title: 'Event List',
      url: '/events',
      templateUrl: '/html/event/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Event', function(Event){
          return Event.query({
            'filter[include][media]': true,
            'filter[include][venue]': true,
            'filter[include][venue.sections]': true,
            'filter[include][entertainers]': true
          }).$promise;
        }]
      },
      menu: [
        {action: 'eventEdit({id: "new"})', text: 'New Event +'}
      ]
    })
    .state('eventEdit', {
      title: 'Add/Edit Event',
      url: '/events/:id',
      templateUrl: '/html/event/addEdit.html',
      controller: 'EventCtrl',
      resolve: {
        event: ['$stateParams', 'Event', function resolve($stateParams, Event){
          var id = $stateParams.id;
          if (id === 'new') return new Event();
          return Event.get({
            id: id,
            'filter[include][media]': true,
            'filter[include][venue]': true,
            'filter[include][venue.sections]': true,
            'filter[include][entertainers]': true
          }).$promise;
        }],
        venues: ['Venue',
        function(Venue){
          return Venue.find({'filter[include]': 'sections'}).$promise;
        }],
        showtimes: ['$stateParams', 'Showtime', function($stateParams, Showtime){
          var id = $stateParams.id;
          if(id) return Showtime.find({'filter[where][eventId]': $stateParams.id}).$promise;
          return [];
        }]
      }
    })
    .state('eventEdit.media', {
      title: 'Select Image',
      templateUrl: '/html/media/select.html',
      controller: 'MediaSelectCtrl',
      resolve: {
        media: ['Medium', resolveList]
      },
      menu: [
        {action: 'eventEdit({id: "new"})', text: 'New Event +'}
      ]
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
      },
      menu: [
        {action: 'mediaEdit({id: "new"})', text: 'New Media +'}
      ]
    })
    .state('mediaEdit', {
      title: 'Add/Edit Medium',
      controller: 'MediumCtrl',
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
      controller: 'VenueCtrl',
      resolve: {
        venue: ['$stateParams', 'Venue', function($stateParams, Venue){
          var id = $stateParams.id;
          if (id === 'new') return new Venue();
          return Venue.get({
            id: id,
            'filter[include][sections]': true
          }).$promise;
        }],
        sections: ['$stateParams', 'Section', function ($stateParams, Resource){
          var id = $stateParams.id;
          return id!=='new'?Resource.find({'filter[where][venueId]': id}).$promise:new Resource();
        }]
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
    .state('pageEdit.media', {
      title: 'Select Image',
      templateUrl: '/html/media/select.html',
      controller: 'MediaSelectCtrl',
      resolve: {
        media: ['Medium', resolveList]
      },
      menu: [
        {action: 'pageEdit({id: "new"})', text: 'New Page +'}
      ]
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
      controller: 'PostCtrl',
      resolve: {
        post: ['$stateParams', 'Post', resolve]
      }
    })
    .state('postEdit.media', {
      title: 'Select Image',
      templateUrl: '/html/media/select.html',
      controller: 'MediaSelectCtrl',
      resolve: {
        media: ['Medium', resolveList]
      },
      menu: [
        {action: 'postEdit({id: "new"})', text: 'New Post +'}
      ]
    })
    .state('testimonials', {
      title: 'Testimonial List',
      url: '/testimonials',
      templateUrl: '/html/testimonial/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Testimonial', resolveList]
      },
      menu: [
        {action: 'testimonialEdit({id: "new"})', text: 'New Testimonial +'}
      ]
    })
    .state('testimonialEdit', {
      title: 'Edit Testimonial',
      url: '/testimonials/:id',
      templateUrl: '/html/testimonial/addEdit.html',
      controller: instanceCtrl('Testimonial'),
      resolve: {
        testimonial: ['$stateParams', 'Testimonial', resolve]
      }
    })
    .state('contactMessages', {
      title: 'Message List',
      url: '/contactMessages',
      templateUrl: '/html/message/list.html',
      controller: listCtrl,
      resolve: {
        list: ['ContactMessage', resolveList]
      },
      menu: [
      ]
    })
    .state('messageView', {
      title: 'View Message',
      url: '/contactMessages/:id',
      templateUrl: '/html/message/view.html',
      controller: instanceCtrl('ContactMessage'),
      resolve: {
        contactmessage: ['$stateParams', 'ContactMessage', resolve]
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
      title: 'Subscriber List',
      url: '/subscribers',
      templateUrl: '/html/subscriber/list.html',
      controller: listCtrl,
      resolve: {
        list: ['Subscriber', resolveList]
      },
      menu: [
      ]
    })
    .state('subscriberEdit', {
      title: 'Subscriber Edit',
      url: '/subscribers/:id',
      templateUrl: '/html/subscriber/addEdit.html',
      controller: instanceCtrl('Subscriber'),
      resolve: {
        subscriber: ['$stateParams', 'Subscriber', resolve]
      }
    })

    // ERROR STATES
    .state('error', {
      url: '/error',
      templateUrl: '/html/error/404.html'
    });

  $locationProvider.html5Mode(true);
}]);
