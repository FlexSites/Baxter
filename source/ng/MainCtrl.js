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
    User.get({id: $window.localStorage.$FlexSite$currentUserId}).$promise
      .then(function(user){
        $scope.user = user;
        var url = '/sites';
        if(!$scope.isAdmin){
          url = '/users/' + user.id + url;
        }

        // Replace with SDK version if we can figure out relations and REST
        $http.get(apiBase + url)
          .then(function(res){
            var sites = res.data;
            $scope.sites = sites;
            if(/[a-f0-9]{24}/i.test($window.localStorage.site)) return setSite($window.localStorage.site);
            setSite(sites[0].id);
          });
      })
      .catch(function(err){
        if(err.status === 401){
          delete $window.localStorage.$FlexSite$currentUserId;
          delete $window.localStorage.$FlexSite$accessTokenId;
          console.log('redirect login');
          $state.go('login');
        }
      });



    $scope.signOut = function(){
      $scope.user.$logout()
        .finally(function(){
          console.log('Sign Out');
          $state.go('login');
        });
    };

    function setSite(id){
      console.log('set site id', id);
      session.site = $window.localStorage.site = $scope.currentSiteId = id;
    }



    $scope.setSite = function(){
      setSite($scope.currentSiteId);
      $state.reload();
    };

    setSite();

  }]);
