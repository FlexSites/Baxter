angular.module('app')
  .controller('MediumCtrl', ['$window', '$http', '$scope', '$state', 'Medium', 'medium', function($window, $http, $scope, $state, Medium, medium){
    medium = medium || new Medium();

    $scope.medium = medium;

    $scope.mediaChange = function(medium, isAdded){
      $scope.medium.id = medium.id;
      $scope.medium.src = medium.src;
      if(!$scope.medium.name) $scope.medium.name = medium.name;
      $scope.$digest();
    };

    $scope.isUpload = function(){
      if (!$scope.medium.src) return false;
      return /flex-*sites/i.test($scope.medium.src);
    };

    $scope.remove = function(medium) {
      medium.$delete(done);
    };

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
    $scope.saveMedium = function(){
      if($scope.medium.id){
        return $scope.medium.$upsert(done);
      }
      $scope.medium.$create(done);
    };
    function done(){
      $state.go('media');
    }
  }]);
