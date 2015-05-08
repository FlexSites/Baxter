angular.module('app', ['FlexSite', 'ui.router'])
  .value('session', {})
  .run(['$rootScope', '$window', '$state', 'Site', 'User', 'session', function($rootScope, $window, $state, Site, User, session){
    var loginState = 'login';

    // Is Admin Flag
    $rootScope.isAdmin = typeof $window.localStorage.isAdmin !== 'undefined';

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

    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, err) {
      console.log(err);
      $state.go('error', {err: err}, {location: false});
    });
    $rootScope.$on('$stateChangeSuccess', function(e, toState) {
      var title = toState.title
        , menu = JSON.parse(JSON.stringify(toState.menu || []));

      if(toState.name !== 'home') menu.unshift({text: 'Back to Dashboard', action: 'home'});

      $rootScope.header = title;
      $rootScope.subHeaderMenu = menu;
      if(title) title += ' | FlexSites.io';
      $rootScope.title = title;
    });
  }]);

function isAdmin(){
  window.localStorage.isAdmin = true;
}
