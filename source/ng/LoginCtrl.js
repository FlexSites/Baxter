angular.module('app')
  .controller('LoginCtrl', ['$window', '$scope', '$state', '$rootScope', 'User' ,function($window, $scope, $state, $rootScope, User ){
    var user = $scope.user = new User();
    $scope.login = function(){
      user.$login(function(){
        $state.go($window.sessionStorage.returnTo || 'home', {}, {reload: true, location: 'replace'});
        delete $window.sessionStorage.returnTo;
      });
    };
  }]);
