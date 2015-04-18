angular.module('app')
  .controller('SidebarCtrl', [
    '$scope',
    '$window',

    function($scope, $window){
      $scope.showSidebar = $window.localStorage.showSidebar;
      $scope.toggleSidebar = function(){
        $window.localStorage.showSidebar = $scope.showSidebar = !$scope.showSidebar;
      };
    }
  ]);
