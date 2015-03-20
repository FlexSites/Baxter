angular.module('app', ['FlexSite', 'ui.router'])
  .run(['$rootScope', '$window', '$state', 'User', function($rootScope, $window, $state, User){
    var loginState = 'login';
    $rootScope.isAdmin = true;
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      var isLoggedIn = User.isAuthenticated()
        , toName = toState.name;

      if(!isLoggedIn && toName !== loginState){
        $window.sessionStorage.returnTo = toState.name;
        e.preventDefault();
        $state.go(loginState); 
      }
      else if(isLoggedIn && ($window.sessionStorage.returnTo || toName === loginState)){
        e.preventDefault();
        $state.go($window.sessionStorage.returnTo || 'home');
        delete $window.sessionStorage.returnTo;
      }
    });
    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, err) {
      $state.go('error', {err: err}, {location: false});
    });
  }]);
