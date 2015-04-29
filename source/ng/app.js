angular.module('app', ['FlexSite', 'ui.router'])
  .run(['$rootScope', '$window', '$state', 'User', function($rootScope, $window, $state, User){
    var loginState = 'login';
    $rootScope.isAdmin = true;
    $rootScope.$on('$stateChangeStart', function(e, toState){
      var isLoggedIn = User.isAuthenticated()
        , toName = toState.name;

      if(!isLoggedIn && toName !== loginState){
        $window.sessionStorage.returnTo = toState.name;
        e.preventDefault();
        $state.go(loginState);
      }
      else if(isLoggedIn && toName === loginState){
        e.preventDefault();
        $state.go('home');
      }
    });
    $rootScope.user = User.get({id: $window.localStorage.$FlexSite$currentUserId});
    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, err) {
      console.log(err);
      $state.go('error', {err: err}, {location: false});
    });
    $rootScope.$on('$stateChangeSuccess', function(e, toState) {
      var title = toState.title
        , menu = JSON.parse(JSON.stringify(toState.menu || []));
      menu.unshift({text: 'Back to Dashboard', action: 'home'});

      $rootScope.header = title;
      $rootScope.subHeaderMenu = menu;
      if(title) title += ' | FlexSites.io';
      $rootScope.title = title;
    });
  }]);
