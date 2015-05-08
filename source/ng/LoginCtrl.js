angular.module('app')
  .controller('LoginCtrl', ['$scope', 'User' ,function($scope, User ){
    var user = $scope.user = new User();
    $scope.login = function(){
      user.$login(function(){
        document.location.reload();
      });
    };
  }]);
