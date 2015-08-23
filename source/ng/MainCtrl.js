angular.module('app')
  .controller('MainCtrl', [
    '$window',
    '$scope',
    '$log',
    '$state',
    '$http',
    'Site',
    'User',
    'session',

    function($window, $scope, $log, $state, $http, Site, User, session){

      Site.query().$promise
        .then(function(sites) {
          $scope.sites = sites;
          if (!$window.localStorage.site) setSite(sites[0].id);
        });

      $scope.showSidebar = $window.localStorage.showSidebar !== 'false';
      $scope.toggleSidebar = function(){
        $window.localStorage.showSidebar = $scope.showSidebar = !$scope.showSidebar;
      };

    $scope.getSite = function(id) {
      return $scope.sites && $scope.sites[id] || {};
    };

    $scope.signOut = function(){
      $scope.user.$logout()
        .finally(function(){
          $state.go('login');
        });
    };

    function setSite(id){
      if(id) session.site = $window.localStorage.site = $scope.currentSiteId = id;
    }

    setSite($window.localStorage.site);

    $scope.setSite = function(id){
      setSite(id);
      $state.reload();
    };
  }]);
