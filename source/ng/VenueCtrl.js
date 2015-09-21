angular.module('app')
  .controller('VenueCtrl', ['$scope', '$state', 'Venue', 'Section', 'venue', function($scope, $state, Resource, Section, item){
    $scope.venue = item || new Resource();
    $scope.saveVenue = function(item){
      if(item.id){
        return item.$upsert(done);
      }
      item.$create(done);
    };
    $scope.saveSection = function(item){

      var section = item instanceof Section ? item : new Section(item);

      if (section.id){
        return section.$upsert(done);
      }
      section.$create(done);

      function done(){
        console.log('setting', section, 'at index');
        // arr[idx] = section;
      }
    };
    $scope.addSection = function(){
      $scope.venue.sections.push(new Section({venue: item.id}));
    };

    $scope.removeSection = function(idx, arr){
      var section = arr[idx];
      if(!section) return;
      section.$delete(function(){
        arr.splice(idx, 1);
      });
    };
    function done(){
      $state.go('venues');
    }
  }]);
