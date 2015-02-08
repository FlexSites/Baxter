
angular.module("app")
    .config(['$httpProvider', function($httpProvider){
        // $httpProvider.interceptors.push('AuthInterceptor');
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
        if(val){
            $scope.event = Event.get(val, function(){

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
            $scope.event.$save(function(){
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