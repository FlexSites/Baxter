angular.module('app')
  .controller('VenueCtrl', ['$window', '$scope', '$state', 'Venue', 'venue', function($window, $scope, $state, Venue, venue){
    $scope.venue = venue || new Venue();
  }]);
