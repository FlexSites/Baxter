angular.module('app')
  .value('session', {})
  .controller('HeadCtrl', [
    '$scope', 
    '$log', 
    '$window', 
    '$state',
    'Site', 
    'session', 

    function($scope, $log, $window, $state, Site, session){

    Site.find({}, function(sites){
      $scope.sites = sites;
    });
    $scope.isAdmin = true;
    $scope.currentSite = session.site = $window.localStorage.site;
    $scope.setSite = function(){
      session.site = $window.localStorage.site = $scope.currentSite;
      $state.reload();
    };

  }]);
