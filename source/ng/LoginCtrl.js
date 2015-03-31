angular.module('app')
  .controller('LoginCtrl', ['$window', '$scope', '$state', '$rootScope', 'User' ,function($window, $scope, $state, $rootScope, User ){
    $rootScope.user = new User();
    $scope.login = function(){
      $rootScope.user.$login(function(user){
        $state.go($window.sessionStorage.returnTo || 'home');
        delete $window.sessionStorage.returnTo;
      });
    };
  }]);
