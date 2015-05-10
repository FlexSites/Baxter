angular.module('app')
  .controller('EventCtrl', ['$window', '$http', '$scope', '$state', 'Event', 'Medium', 'event', 'venues', function($window, $http, $scope, $state, Event, Medium, event, venues){
    event = event || new Event();

    if(!event.venue) event.venue = venues[0].id;

    $scope.event = event;
    $scope.venues = venues;

    $scope.mediaChange = function(medium, isAdded){
      if(!$scope.event.mediumIds) $scope.event.mediumIds = [];
      $scope.event.mediumIds.push(medium.id);
    };

    var lower = name.toLowerCase();
      $scope[lower] = event || new Event();
      $scope['saveEvent'] = function(event){
        if(event.id){
          return event.$upsert(done);
        }
        event.$create(done);
      };
      function done(){
        $state.go('events');
      }
  }]);
