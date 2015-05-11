angular.module('app')
  .controller('MediaSelectCtrl', ['$window', '$http', '$scope', '$state', 'Medium', 'media', function($window, $http, $scope, $state, Medium, media){

    var selected = [];

    $scope.mediaChange = function(medium, isAdded){
      $scope.medium.id = medium.id;
      $scope.medium.src = medium.src;
      if(!$scope.medium.name) $scope.medium.name = medium.name;
    };

    $scope.select = function(medium){
      $scope.$parent.selectMedia(medium);
      selected.push(medium.id);
    };

    $scope.isSelect = function(medium){
      return ~selected.indexOf(medium.id);
    };

    $scope.media = media.map(function(medium){
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
      return medium;
    });

    console.log($scope.media);


    // var lower = name.toLowerCase();
    // $scope[lower] = medium || new Medium();
    // $scope['saveMedium'] = function(medium){
    //   if(medium.id){
    //     return medium.$upsert(done);
    //   }
    //   medium.$create(done);
    // };
    // function done(){
    //   $state.go('media');
    // }
  }]);
