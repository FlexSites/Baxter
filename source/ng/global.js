
angular.module("app")
    .config(['$httpProvider', function($httpProvider){
        // $httpProvider.interceptors.push('AuthInterceptor');
    }])
    .run(['$location', '$rootScope', '$http', '$window',
        function($location, $rootScope, $http, $window) {
            // $rootScope.bgClass = 'bg-home';
            $rootScope.$on('$routeChangeStart', function(event, current, previous) {
                var token = JSON.parse($window.localStorage.token||'{}');
                /*
                {
                  "id": "oAeN12yaEqa7Dteyxw40pcmFqjwyvexANI3hzPRSRUoTJf5LrDq3892udhdNT6RV",
                  "ttl": 1209600,
                  "created": "2015-02-16T23:53:38.847Z",
                  "userId": "54e1804b5d10694029c278d7"
                }
                */
                if(!token.id || !token.ttl){
                    if(current.originalPath !== '/login'){
                        $window.location.href = '/login';
                    }
                }
            });
        }
    ])
    .controller('LoginCtrl', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location){
        $scope.credentials = {};
        $scope.login = function(){
            $http.post('http://localapi.flexhub.io/Users/login', $scope.credentials).then(function(res){
                if(res.data){
                    $window.localStorage.token = JSON.stringify(res.data);
                    $location.path('/');
                }
            });
        }
    }])
    .controller('HeaderCtrl', ['$scope', '$window', '$location', '$route', '$rootScope', function($scope, $window, $location, $route, $rootScope){
        if(!$window.sessionStorage.bearer){
            // $location.path('/login');
        }
        $scope.currentSite = $window.localStorage.currentSite;
        $scope.changeSite = function(){
            $window.localStorage.currentSite = $scope.currentSite;
            $route.reload();
        }
        $scope.currentVenue = $window.localStorage.currentVenue;
        $scope.changeVenue = function(){
            $window.localStorage.currentVenue = $scope.currentVenue;
            $route.reload();
        }
        $rootScope.isAdmin = true;
    }])
    .directive('addItem', ['$parse', function($parse){

        return {
            scope: {
                addItem: '='
            },
            restrict: 'A', 
            link:  {
                post: function(scope, elem, attrs) {
                    var modelArray = scope.$eval(attrs.addList);

                    elem.bind('click', function() {            
                        scope.$apply(function () {
                          modelArray.push(scope.addItem);
                        });
                    });
            //      elem.bind('click', function(e){
                        // scope.addList.push(scope.addItem);
                        // e.preventDefault();
                        // e.stopPropagation();
                        // return false;
            //      }).bind('focusout', function(e){
            //          console.log('focus lost');
            //      })
                }
            }
        };
    }])
    .controller('EventAddEdit', ['$scope', '$window', '$routeParams', '$http', 'Event', 'Venue', 'Entertainer', function($scope, $window, $routeParams, $http, Event, Venue, Entertainer){

        var site = $window.localStorage.currentSite;
        var val = $routeParams.event;
        console.log('eventroute', val);
        if(val){
            $scope.event = Event.get({id: val, site: site}, function(){

            });
        }
        else {
            $scope.event = new Event({site: site, pricingTiers: [], showtimes: []});
        }


        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        $scope.getEntertainers = function(val) {
            console.log('get entertainers');
            return Entertainer.query({name: val, limit: 8}, function(entertainers) {
                console.log('entertainer query', entertainers);
            });
          };

          $scope.saveEvent = function(){
            if(!$scope.event instanceof Event){
                $scope.event = new Event($scope.event);
            }

            var event = $scope.event;
            _.each(event.showtimes, function(showtime){
                showtime.datetime = showtime.date + ' ' + showtime.time;
                delete showtime.date;
                delete showtime.time;
            });
            console.log(event.showtimes);
            event.$save(function(){
                console.log('Event saved');
            });
          }


        var venues = Venue.query({site: site}, function(){
            console.log(venues.length);
            if(venues.length === 1 || !val){
                $scope.event.venue = venues[0]._id;
            }
            $scope.venues = venues;
        });

        $scope.addPricingTier = function(){
            var sections = [];
            _.each($scope.sections,function(section){
                sections.push({section: section._id});
            });
            $scope.event.pricingTiers.push({sections: sections});
        }
    }])
    .controller('MainController', ['$scope', function($scope) {
        // Main controller
        $scope.remove = function(idx, arr){
            arr.splice(idx, 1);
        }
    }]);