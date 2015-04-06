angular.module('app')
  .value('session', {})
  .controller('HeadCtrl', [
    '$scope', 
    '$log', 
    '$window', 
    '$state',
    '$rootScope',
    'Site', 
    'session', 
    'User',

    function($scope, $log, $window, $state, $rootScope, Site, session, User){

    Site.find({}, function(sites){
      $scope.sites = sites;
      for(var i = 0; i < sites.length; i++) {
        if(sites[i].id == session.site) $scope.currentSite = sites[i];
      }
    });

    $scope.logout = function(){
      $rootScope.user.signOut(function(){
        console.log('Sign Out');
        $state.go('login');
      });
    };
    $scope.isAdmin = true;
    $rootScope.user.$promise.then(function(user){
      $scope.gravatar = encodeURIComponent(user.email);
    });
    $log.log($rootScope.user);
    
    $scope.currentSiteId = session.site = $window.localStorage.site;

    $scope.setSite = function(){
      session.site = $window.localStorage.site = $scope.currentSiteId;
      $state.reload();
    };

  }]);
