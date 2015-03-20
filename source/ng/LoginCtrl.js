angular.module('app')
  .controller('LoginCtrl', ['$window', '$scope', '$state', 'User',function($window, $scope, $state, User){
    $scope.user = new User();
    $scope.login = function(){
      $scope.user.$login(function(user){
        $state.go($window.sessionStorage.returnTo || 'home');
        delete $window.sessionStorage.returnTo;
      });
    };
  }]);
