angular.module('app')
  .controller('LoginCtrl', ['$scope', 'Session' ,function($scope, Session ){
    var session = $scope.session = new Session();
    $scope.login = function(){
      console.log($scope.session);
      $scope.session.$create(function(){
        console.log($scope.session);
        document.location.reload();
      });
    };
  }]);
