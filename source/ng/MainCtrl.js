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
    'apiBase',

    function($window, $scope, $log, $state, $http, Site, User, session, apiBase){


    // Get the currently logged in (hopefully) user
    User.get().$promise
      .then(function(user){
        $scope.user = user;

        // Replace with SDK version if we can figure out relations and REST
        $http.get(apiBase + '/sites')
          .then(function(res){
            var sites = res.data;
            $scope.sites = sites;
            console.log('sites', sites);
            if(!session.site) setSite(sites[0].id);
          });
      })
      .catch(function(err){
        if(err.status === 401){
          delete $window.localStorage.$FlexSite$currentUserId;
          delete $window.localStorage.$FlexSite$accessTokenId;
          $state.go('login');
        }
      });


      $scope.showSidebar = $window.localStorage.showSidebar === 'true';
      $scope.toggleSidebar = function(){
        $window.localStorage.showSidebar = $scope.showSidebar = !$scope.showSidebar;
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
