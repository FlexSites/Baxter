angular.module('app')
  .controller('MediumCtrl', ['$window', '$http', '$scope', '$state', 'Medium', 'medium', function($window, $http, $scope, $state, Medium, medium){
    medium = medium || new Medium();

    $scope.medium = medium;

    $scope.mediaChange = function(medium, isAdded){
      console.log('MEDIA CHANGE CALLED!');
      $scope.medium.id = medium.id;
      $scope.medium.src = medium.src;
      if(!$scope.medium.name) $scope.medium.name = medium.name;
    };

    console.log('medium', medium);
    if(medium.type === 'video') {
      console.log('is video');
      // Youtube matching
      var match = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i.exec(medium.src);
      if(match && match[1]){
        console.log('stuff');
        $scope.thumbnail = 'http://img.youtube.com/vi/' + match[1] + '/0.jpg';
        $scope.embed = 'https://www.youtube.com/embed/' + match[1];
      }
    }


    var lower = name.toLowerCase();
    $scope[lower] = medium || new Medium();
    $scope['saveMedium'] = function(medium){
      if(medium.id){
        return medium.$upsert(done);
      }
      medium.$create(done);
    };
    function done(){
      $state.go('media');
    }
  }]);
