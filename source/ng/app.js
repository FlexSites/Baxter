angular.module('app', ['FlexSite', 'ui.router'])
  .value('session', {})
  .filter('idToDate', function() {
    return function(input){
      return new Date(parseInt(input.toString().slice(0,8), 16)*1000);
    };
  })
  .run(['$rootScope', '$window', '$state', '$timeout', 'Site', 'Session', function($rootScope, $window, $state, $timeout, Site, Session){
    var loginState = 'login';

    $rootScope.$on('$stateChangeStart', function(e, toState){

      var toName = toState.name;

      // For the body content animation
      $rootScope.routeChange = true;

      return Session.query().$promise
        .then(function(session) {
          if(!session.length) throw new Error('Unauthenticated!');
          if(!$rootScope.user) {
            $rootScope.user = session[0];
            // Is Admin Flag
            $rootScope.isAdmin = $rootScope.user.isAdmin;
          }
          if(toName === loginState){
            $rootScope.user = session[0];
            e.preventDefault();
            $state.go('home');
          }
        })
        .catch(function() {
          if (toName !== loginState){
            $window.sessionStorage.returnTo = toState.name;
            e.preventDefault();
            // $window.location.href = '/login';
          }
        });
    });

    $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, err) {
      console.log(err);
      $timeout(function(){
        $rootScope.routeChange = false;
      }, 250);
      $state.go('error', {err: err}, {location: false});
    });
    $rootScope.$on('$stateChangeSuccess', function(e, toState) {
      $timeout(function(){
        $rootScope.routeChange = false;
      }, 250);
      var title = toState.title
        , menu = JSON.parse(JSON.stringify(toState.menu || []));

      if(toState.name !== 'home') menu.unshift({text: 'Back to Dashboard', action: 'home'});

      $rootScope.header = title;
      $rootScope.subHeaderMenu = menu;
      if(title) title += ' | FlexSites.io';
      $rootScope.title = title;
    });
  }]);
